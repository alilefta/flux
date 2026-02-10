"use server";

import { getChannelById } from "@/data/channel";
import { getMemberByProfileId } from "@/data/member";
import { ERRORS } from "@/lib/errors";
import { MessageEvent } from "@/lib/events";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { actionClientWithProfile } from "@/lib/safe-action";
import { ChannelMessage, CreateMessageInput, DeleteMessageSchema, GetMessageInputSchema, UpdateMessageSchema } from "@/schemas/message";

export const sendMessageAction = actionClientWithProfile
	.metadata({ actionName: "send-message-action" })
	.inputSchema(CreateMessageInput)
	.action(async ({ ctx, parsedInput }) => {
		const { channelId, content, fileUrl } = parsedInput;

		// Get member
		const member = await getMemberByProfileId(ctx.profile.id);
		if (!member) throw ERRORS.NOT_MEMBER;

		// Verify channel exists
		const channel = await getChannelById(channelId);
		if (!channel) throw ERRORS.CHANNEL_NOT_FOUND;

		// Create message
		const message = await prisma.message.create({
			data: {
				content,
				channelId,
				fileUrl,
				memberId: member.id,
			},
			include: {
				member: {
					include: {
						profile: true,
					},
				},
			},
		});

		// TODO: Emit Socket.io event here
		// io.to(`channel:${channelId}`).emit("message:new", message);

		// ✅ Broadcast via Pusher
		const channelName = `channel-${channelId}`;
		await pusherServer.trigger(channelName, MessageEvent.NEW, message);

		return { success: true, data: { message } };
	});

export const getMessagesAction = actionClientWithProfile
	.metadata({ actionName: "get-messages-action" })
	.inputSchema(GetMessageInputSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { channelId, serverId, cursor } = parsedInput;

		console.log("Current Cursor value:", cursor);

		const pageSize = 2;

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
		let messages: ChannelMessage[];
		if (cursor) {
			// Fetch messages
			messages = await prisma.message.findMany({
				where: {
					channelId,
					deleted: false,
					createdAt: {
						lt: cursor,
					},
				},
				include: {
					member: {
						include: {
							profile: true,
						},
					},
				},
				orderBy: {
					createdAt: "desc", // ✅ Oldest first (like Discord)
				},
				take: pageSize, // ✅ Limit to last 50 messages for now
			});
		} else {
			// Fetch messages
			messages = await prisma.message.findMany({
				where: {
					channelId,
					deleted: false,
				},
				include: {
					member: {
						include: {
							profile: true,
						},
					},
				},
				orderBy: {
					createdAt: "asc", // ✅ Oldest first (like Discord)
				},
				take: pageSize, // ✅ Limit to last 50 messages for now
			});
		}

		return {
			success: true,
			messages,
		};
	});

export const editMessageAction = actionClientWithProfile
	.metadata({ actionName: "edit-message-action" })
	.inputSchema(UpdateMessageSchema)
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

		if (!message) {
			throw new Error("Message not found");
		}

		// Check if user owns this message
		if (message.member.profileId !== ctx.profile.id) {
			throw new Error("You can only edit your own messages");
		}

		// Check if message is deleted
		if (message.deleted) {
			throw new Error("Cannot edit deleted message");
		}

		// Update message
		const updatedMessage = await prisma.message.update({
			where: { id: messageId },
			data: {
				content,
				edited: true, // ✅ Set edited flag
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
		// ✅ Broadcast update
		const channelName = `channel-${updatedMessage.channelId}`;
		await pusherServer.trigger(channelName, MessageEvent.UPDATE, updatedMessage);

		return {
			success: true,
			data: { message: updatedMessage },
		};
	});

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

		if (!message) {
			throw new Error("Message not found");
		}

		// Only owner or ADMIN can delete
		const isOwner = message.member.profileId === ctx.profile.id;
		const isAdmin = message.member.role === "ADMIN";

		if (!isOwner && !isAdmin) {
			throw new Error("Permission denied");
		}

		// Check if user owns this message
		if (message.member.profileId !== ctx.profile.id) {
			throw new Error("You can only delete your own messages");
		}

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
	});
