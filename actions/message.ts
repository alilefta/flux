"use server";

import { getChannelById } from "@/data/channel";
import { getMemberByProfileId } from "@/data/member";
import { ERRORS } from "@/lib/errors";
import prisma from "@/lib/prisma";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateMessageInput, GetMessageInputSchema } from "@/schemas/message";

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

		return { success: true, data: { message } };
	});

export const getMessagesAction = actionClientWithProfile
	.metadata({ actionName: "get-messages" })
	.inputSchema(GetMessageInputSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { channelId, serverId } = parsedInput;

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

		// Fetch messages
		const messages = await prisma.message.findMany({
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
			take: 50, // ✅ Limit to last 50 messages for now
		});

		return {
			success: true,
			data: { messages },
		};
	});
