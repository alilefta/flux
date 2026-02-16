"use server";

import { MessageWhereInput } from "@/generated/prisma/models";
import { ERRORS } from "@/lib/errors";
import { MessageEvent } from "@/lib/events";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateMessageSchema, DeleteMessageSchema, EditMessageSchema, GetMessageInputSchema } from "@/schemas/message";

// ============================= SEND MESSAGE ======================================

export const sendMessageAction = actionClientWithProfile
	.metadata({ actionName: "send-message-action" })
	.inputSchema(CreateMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { channelId, content, files, replyToId, optimisticClientId } = parsedInput;

		console.log("[Send-Message-Action] Recieved Optimistic ID:", optimisticClientId);

		// Get member
		const member = await prisma.member.findFirst({
			where: {
				profileId: ctx.profile.id,
			},
			include: {
				profile: true,
			},
		});

		if (!member) throw ERRORS.NOT_MEMBER;

		// Verify channel exists
		const channel = await prisma.channel.findUnique({
			where: { id: channelId },
		});

		if (!channel) throw ERRORS.CHANNEL_NOT_FOUND;

		// ✅ Check if channel is locked (ANNOUNCEMENT type)
		if (channel.isLocked && member.role !== "ADMIN") {
			throw new Error("This channel is read-only");
		}

		try {
			// ✅ Create message with attachments in transaction
			const message = await prisma.$transaction(async (tx) => {
				// 1. Create message
				const newMessage = await tx.message.create({
					data: {
						content: content || "",
						channelId,
						memberId: member.id,
						replyToId, // ✅ Thread support
					},
				});

				// 2. ✅ Create attachments with FULL metadata
				if (files && files.length > 0) {
					await tx.fileAttachment.createMany({
						data: files.map((file) => ({
							url: file.url,
							name: file.name,
							type: file.type,
							size: file.size || null, // ✅ Store actual size
							messageId: newMessage.id,
						})),
					});
				}

				// 3. Fetch complete message with relations
				return await tx.message.findUnique({
					where: { id: newMessage.id },
					include: {
						member: {
							include: {
								profile: true,
							},
						},
						attachments: true, // ✅ Include attachments

						replyTo: {
							// ✅ Return the parent for optimistic UI / socket
							include: {
								member: {
									include: { profile: true },
								},
							},
						},
					},
				});
			});

			if (!message) {
				throw new Error("Failed to create message");
			}

			// ✅ Broadcast via Pusher
			const channelName = `channel-${channelId}`;
			await pusherServer.trigger(channelName, MessageEvent.NEW, { ...message, optimisticClientId });

			return { success: true, data: { message } };
		} catch (e) {
			console.error("[Send-message-action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// ============================= GET MESSAGES ======================================

export const getMessagesAction = actionClientWithProfile
	.metadata({ actionName: "get-messages-action" })
	.inputSchema(GetMessageInputSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { channelId, serverId, cursor } = parsedInput;

		const pageSize = 50;

		// Verify member
		const member = await prisma.member.findFirst({
			where: {
				profileId: ctx.profile.id,
				serverId,
			},
		});

		if (!member) {
			throw ERRORS.NOT_MEMBER;
		}
		const whereClause: MessageWhereInput = {
			channelId,
			deleted: false,
			...(cursor && {
				createdAt: {
					lt: cursor,
				},
			}),
		};

		// ✅ Single query with conditional where clause
		const messages = await prisma.message.findMany({
			where: whereClause,
			include: {
				member: {
					include: {
						profile: true,
					},
				},
				attachments: true,
				reactions: true,

				replyTo: {
					include: {
						member: {
							include: { profile: true },
						},
						attachments: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
			take: pageSize,
		});

		let nextCursor: Date | undefined = undefined;

		if (messages.length === pageSize) {
			// If we fetched a full page, the last item is the cursor for the next fetch
			nextCursor = messages[messages.length - 1].createdAt;
		}

		return {
			success: true,
			messages,
			nextCursor,
		};
	});

// ============================= EDIT MESSAGE ======================================

export const editMessageAction = actionClientWithProfile
	.metadata({ actionName: "edit-message-action" })
	.inputSchema(EditMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, content } = parsedInput;

		// Find the message
		const message = await prisma.message.findUnique({
			where: { id: messageId },
			include: {
				member: {
					include: {
						profile: true,
					},
				},
			},
		});

		if (!message) throw ERRORS.NOT_FOUND;

		// Check if user owns this message
		// Check ownership
		if (message.member.profileId !== ctx.profile.id) {
			throw ERRORS.UNAUTHORIZED;
		}

		// Check if message is deleted
		if (message.deleted) {
			throw new Error("Cannot edit deleted message");
		}

		try {
			// Update message
			const updatedMessage = await prisma.message.update({
				where: { id: messageId },
				data: {
					content,
					edited: true,
				},
				include: {
					member: {
						include: {
							profile: true,
						},
					},
					attachments: true,
					reactions: true,
					replyTo: {
						include: {
							member: {
								include: { profile: true },
							},
							attachments: true,
						},
					},
				},
			});

			// TODO: Emit Socket.io event
			// io.to(`channel:${message.channelId}`).emit("message:update", updatedMessage);
			// ✅ Broadcast update
			const channelName = `channel-${updatedMessage.channelId}`;
			await pusherServer.trigger(channelName, MessageEvent.UPDATE, updatedMessage);

			return {
				success: true,
				data: { message: updatedMessage },
			};
		} catch (e) {
			console.error("[Edit-Message-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// ============================= DELETE MESSAGE ======================================

export const markMessageAsDeletedAction = actionClientWithProfile
	.metadata({ actionName: "mark-message-as-deleted-action" })
	.inputSchema(DeleteMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId } = parsedInput;

		// Find the message
		const message = await prisma.message.findUnique({
			where: { id: messageId },
			include: {
				member: {
					include: {
						profile: true,
					},
				},
			},
		});

		if (!message) throw ERRORS.NOT_FOUND;

		const member = await prisma.member.findFirst({
			where: {
				profileId: ctx.profile.id,
				serverId: message.member.serverId,
			},
		});

		// Only owner or ADMIN can delete
		const isOwner = message.member.profileId === ctx.profile.id;
		const isAdmin = member?.role === "ADMIN";

		if (!isOwner && !isAdmin) {
			throw ERRORS.UNAUTHORIZED;
		}

		// Check if user owns this message
		if (message.member.profileId !== ctx.profile.id) {
			throw new Error("You can only delete your own messages");
		}

		try {
			// Update message
			const markedAsDeletedMessage = await prisma.message.update({
				where: { id: messageId },
				data: {
					deleted: true,
				},
				include: {
					member: {
						include: {
							profile: true,
						},
					},
				},
			});

			// TODO: Emit Socket.io event
			// io.to(`channel:${message.channelId}`).emit("message:update", updatedMessage);
			const channelName = `channel-${markedAsDeletedMessage.channelId}`;
			await pusherServer.trigger(channelName, MessageEvent.DELETE, markedAsDeletedMessage);

			return {
				success: true,
				data: { message: markedAsDeletedMessage },
			};
		} catch (e) {
			console.error("[Delete-Message-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
