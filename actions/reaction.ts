// /actions/reaction.ts
"use server";

import { actionClientWithProfile } from "@/lib/safe-action";
import { AddReactionSchema, RemoveReactionSchema } from "@/schemas/message";
import { pusherServer } from "@/lib/pusher";
import { MessageEvent } from "@/lib/events";
import prisma from "@/lib/prisma";
import { ERRORS } from "@/lib/errors";
import { AddDirectMessageReactionSchema, RemoveDirectMessageReactionSchema } from "@/schemas/composed/direct-message.details";

export const addReactionAction = actionClientWithProfile
	.metadata({ actionName: "add-reaction-action" })
	.inputSchema(AddReactionSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, emoji } = parsedInput;

		// Get message
		const message = await prisma.message.findUnique({
			where: { id: messageId },
			include: {
				member: {
					include: { profile: true },
				},
			},
		});

		if (!message) throw ERRORS.NOT_FOUND;

		// Check if already reacted with this emoji
		const existingReaction = await prisma.messageReaction.findUnique({
			where: {
				messageId_profileId_emoji: {
					messageId,
					profileId: ctx.profile.id,
					emoji,
				},
			},
		});

		// If already reacted, remove it (toggle)
		if (existingReaction) {
			await prisma.messageReaction.delete({
				where: { id: existingReaction.id },
			});

			// Broadcast removal
			await pusherServer.trigger(`channel-${message.channelId}`, MessageEvent.REACTION_REMOVE, {
				messageId,
				emoji,
				profileId: ctx.profile.id,
			});

			return { success: true, data: { removed: true } };
		}

		try {
			// Add new reaction
			const reaction = await prisma.messageReaction.create({
				data: {
					messageId,
					emoji,
					profileId: ctx.profile.id,
					memberId: message.member.id,
				},
			});

			// Broadcast addition
			await pusherServer.trigger(`channel-${message.channelId}`, MessageEvent.REACTION_ADD, reaction);

			return { success: true, data: { reaction, removed: false } };
		} catch (e) {
			console.error("[Add-Reaction-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

export const removeReactionAction = actionClientWithProfile
	.metadata({ actionName: "remove-reaction-action" })
	.inputSchema(RemoveReactionSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, emoji } = parsedInput;

		// Get message
		const message = await prisma.message.findUnique({
			where: { id: messageId },
		});

		if (!message) throw ERRORS.NOT_FOUND;

		// Find reaction
		const reaction = await prisma.messageReaction.findUnique({
			where: {
				messageId_profileId_emoji: {
					messageId,
					profileId: ctx.profile.id,
					emoji,
				},
			},
		});

		if (!reaction) {
			throw new Error("Reaction not found");
		}
		try {
			// Delete reaction
			await prisma.messageReaction.delete({
				where: { id: reaction.id },
			});

			// Broadcast removal
			await pusherServer.trigger(`channel-${message.channelId}`, MessageEvent.REACTION_REMOVE, {
				messageId,
				emoji,
				profileId: ctx.profile.id,
			});

			return { success: true, data: { reaction } };
		} catch (e) {
			console.error("[Remove-Reaction-Action] Error", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// =============================== Direct Messages ================================
export const addDirectReactionAction = actionClientWithProfile
	.metadata({ actionName: "add-direct-reaction" })
	.inputSchema(AddDirectMessageReactionSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, emoji } = parsedInput;

		// Fetch DM to verify access
		const message = await prisma.directMessage.findUnique({
			where: { id: messageId },
			include: { conversation: true },
		});

		if (!message) throw ERRORS.NOT_FOUND;

		// Verify participation
		const isParticipant = message.conversation.memberOneId === ctx.profile.id || message.conversation.memberTwoId === ctx.profile.id;

		if (!isParticipant) throw ERRORS.UNAUTHORIZED;

		// Check existing
		const existingReaction = await prisma.messageReaction.findFirst({
			where: {
				directMessageId: messageId,
				profileId: ctx.profile.id,
				emoji,
			},
		});

		if (existingReaction) {
			throw new Error("Already reacted with this emoji");
		}

		// Create Reaction
		const reaction = await prisma.messageReaction.create({
			data: {
				emoji,
				directMessageId: messageId,
			},
		});

		// Broadcast
		const channelName = `conversation-${message.conversationId}`;
		await pusherServer.trigger(channelName, MessageEvent.REACTION_ADD, reaction);

		return { success: true, data: reaction };
	});

// 2. REMOVE REACTION
export const removeDirectReactionAction = actionClientWithProfile
	.metadata({ actionName: "remove-direct-reaction" })
	.inputSchema(RemoveDirectMessageReactionSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, emoji } = parsedInput;

		// Fetch message
		const message = await prisma.directMessage.findUnique({
			where: { id: messageId },
			include: { conversation: true },
		});

		if (!message) throw ERRORS.NOT_FOUND;

		// Delete specific reaction
		const reaction = await prisma.messageReaction.findFirst({
			where: {
				directMessageId: messageId,
				profileId: ctx.profile.id,
				emoji,
			},
		});

		if (!reaction) throw new Error("Reaction not found");

		await prisma.messageReaction.delete({
			where: { id: reaction.id },
		});

		// Broadcast
		const channelName = `conversation-${message.conversationId}`;
		await pusherServer.trigger(channelName, MessageEvent.REACTION_REMOVE, {
			messageId,
			emoji,
			profileId: ctx.profile.id,
		});

		return { success: true };
	});
