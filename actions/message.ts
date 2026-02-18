"use server";

import { MessageWhereInput } from "@/generated/prisma/models";
import { ERRORS } from "@/lib/errors";
import { MessageEvent } from "@/lib/events";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateMessageSchema, DeleteMessageSchema, EditMessageSchema, GetMessageInputSchema, GetPinMessageSchema, PinMessageSchema } from "@/schemas/message";

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
		const { channelId, serverId, cursor, mode, targetMessageId } = parsedInput;

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

		// ✅ MODE 1: Around a specific message (Jump)
		if (mode === "around" && targetMessageId) {
			return await getMessagesAroundTarget({
				channelId,
				targetMessageId,
				pageSize,
			});
		}

		// ✅ MODE 2: Normal chronological (existing logic)
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

// ✅ Helper: Load messages around a target
async function getMessagesAroundTarget({ channelId, targetMessageId, pageSize }: { channelId: string; targetMessageId: string; pageSize: number }) {
	// 1. Find the target message
	const targetMessage = await prisma.message.findUnique({
		where: { id: targetMessageId },
		select: { createdAt: true, id: true },
	});

	if (!targetMessage) {
		throw new Error("Target message not found");
	}

	const halfPage = Math.floor(pageSize / 2);

	// 2. Get messages BEFORE target (older)
	const messagesBefore = await prisma.message.findMany({
		where: {
			channelId,
			deleted: false,
			createdAt: {
				lt: targetMessage.createdAt,
			},
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
		orderBy: {
			createdAt: "desc",
		},
		take: halfPage,
	});

	// 3. Get the target message itself
	const targetWithDetails = await prisma.message.findUnique({
		where: { id: targetMessageId },
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

	// 4. Get messages AFTER target (newer)
	const messagesAfter = await prisma.message.findMany({
		where: {
			channelId,
			deleted: false,
			createdAt: {
				gt: targetMessage.createdAt,
			},
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
		orderBy: {
			createdAt: "asc", // ✅ ASC for newer messages
		},
		take: halfPage,
	});

	// 5. Combine: [older...target...newer]
	const allMessages = [
		...messagesBefore.reverse(), // Reverse to get chronological order
		targetWithDetails!,
		...messagesAfter,
	];

	return {
		success: true,
		messages: allMessages.reverse(), // Return in DESC order (newest first) for consistency
		nextCursor: messagesBefore.length > 0 ? messagesBefore[messagesBefore.length - 1].createdAt : undefined,
		targetMessageId, // ✅ Return this so frontend knows to scroll to it
	};
}

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

// ============================= PIN MESSAGE ======================================
export const pinMessageAction = actionClientWithProfile
	.metadata({ actionName: "pin-message-action" })
	.inputSchema(PinMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, memberId } = parsedInput;

		// 1. Fetch message + member relations to check permissions
		const message = await prisma.message.findUnique({
			where: { id: messageId },
			include: {
				member: true,
				channel: {
					include: {
						server: true,
					},
				},
			},
		});

		if (!message || message.deleted) {
			throw new Error("Message not found");
		}

		// 2. Fetch the *Current User's* member record for this server
		const currentMember = await prisma.member.findFirst({
			where: {
				serverId: message.channel.serverId,
				profileId: ctx.profile.id,
				id: memberId,
			},
		});

		if (!currentMember) throw new Error("Unauthorized");

		// 3. Permission Check: Only Admins or Moderators can pin
		const isAdmin = currentMember.role === "ADMIN";
		const isModerator = currentMember.role === "MODERATOR";

		if (!isAdmin && !isModerator) {
			throw new Error("Only Moderators can pin messages");
		}

		try {
			// 4. Toggle the pinned state
			const updatedMessage = await prisma.message.update({
				where: { id: messageId },
				data: {
					pinned: !message.pinned, // Toggle
				},
				include: {
					member: {
						include: {
							profile: true,
						},
					},
					attachments: true,
					replyTo: {
						include: {
							member: {
								include: { profile: true },
							},
						},
					},
				},
			});

			// 5. Broadcast Update
			const channelName = `channel-${message.channelId}`;
			await pusherServer.trigger(channelName, MessageEvent.UPDATE, updatedMessage);

			return { success: true, data: { message: updatedMessage } };
		} catch (e) {
			console.error("[Pin-Message-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// ============================= GET PINNED MESSAGE ======================================

export const getPinnedMessageAction = actionClientWithProfile
	.metadata({ actionName: "get-pinned-message" })
	.inputSchema(GetPinMessageSchema)
	.action(async ({ parsedInput }) => {
		const { channelId } = parsedInput;

		try {
			const pinnedMessage = await prisma.message.findFirst({
				where: {
					channelId,
					pinned: true,
					deleted: false,
				},
				include: {
					member: {
						include: { profile: true },
					},
					attachments: true,
					// We don't need replyTo or reactions for the tiny preview
				},
				orderBy: {
					createdAt: "desc", // Latest pinned message
				},
			});

			return { success: true, message: pinnedMessage };
		} catch (e) {
			console.error("[Get-Pin-Message-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
