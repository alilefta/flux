"use server";

import { DirectMessageWhereInput } from "@/generated/prisma/models";
import { ERRORS } from "@/lib/errors";
import { MessageEvent } from "@/lib/events";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { actionClientWithProfile } from "@/lib/safe-action";
import {
	CreateDirectMessageSchema,
	DeleteDirectMessageSchema,
	EditDirectMessageSchema,
	GetDirectMessageInputSchema,
	GetPinMessageSchema,
	PinMessageSchema,
	SearchMessagesSchema,
} from "@/schemas/composed/direct-message.details";

/**
 * Action: Send Direct Message
 * Description: Creates a new DM, handles file attachments, and broadcasts via Pusher.
 * Security: Verifies the current user is a participant in the conversation.
 */
export const sendDirectMessageAction = actionClientWithProfile
	.metadata({ actionName: "send-direct-message-action" })
	.inputSchema(CreateDirectMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { conversationId, content, files, replyToId, optimisticClientId } = parsedInput;

		// 1. Security & Existence Check
		const conversation = await prisma.conversation.findFirst({
			where: {
				id: conversationId,
				OR: [{ memberOneId: ctx.profile.id }, { memberTwoId: ctx.profile.id }],
			},
		});

		if (!conversation) {
			throw ERRORS.NOT_FOUND; // Conversation doesn't exist or user isn't part of it
		}

		try {
			// 2. Transaction: Create Message + Attachments
			const message = await prisma.$transaction(async (tx) => {
				// A. Create the base message
				const newMessage = await tx.directMessage.create({
					data: {
						content: content || "",
						conversationId,
						memberId: ctx.profile.id, // In DMs, memberId links to Profile
						replyToId,
					},
				});

				// B. Create attachments if present
				if (files && files.length > 0) {
					await tx.fileAttachment.createMany({
						data: files.map((file) => ({
							url: file.url,
							name: file.name,
							type: file.type,
							size: file.size || null,
							directMessageId: newMessage.id, // Link to DM
						})),
					});
				}

				// C. Fetch the fully populated message for the UI
				return await tx.directMessage.findUnique({
					where: { id: newMessage.id },
					include: {
						member: true, // Returns the Profile object
						attachments: true,
						replyTo: {
							include: {
								member: true, // Returns the Profile of the replied-to user
								attachments: true,
							},
						},
					},
				});
			});

			if (!message) {
				throw new Error("Failed to retrieve created message");
			}

			// 3. Real-time Broadcast
			const conversationName = `conversation-${conversationId}`;
			await pusherServer.trigger(conversationName, MessageEvent.NEW, {
				...message,
				optimisticClientId,
			});

			return { success: true, data: { message } };
		} catch (e) {
			console.error("[Send-Direct-Message] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

/**
 * Action: Get Direct Messages
 * Description: Fetches paginated messages for a conversation.
 * Features: Supports chronological scrolling AND "Jump to Message" mode.
 */
export const getDirectMessagesAction = actionClientWithProfile
	.metadata({ actionName: "get-direct-messages-action" })
	.inputSchema(GetDirectMessageInputSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { conversationId, cursor, mode, targetMessageId } = parsedInput;
		const pageSize = 50;

		// 1. Security Check
		const conversation = await prisma.conversation.findFirst({
			where: {
				id: conversationId,
				OR: [{ memberOneId: ctx.profile.id }, { memberTwoId: ctx.profile.id }],
			},
		});

		if (!conversation) {
			throw ERRORS.UNAUTHORIZED;
		}

		try {
			// ✅ MODE 1: Jump Mode (Around a specific target)
			if (mode === "around" && targetMessageId) {
				return await getMessagesAroundTarget({
					conversationId,
					targetMessageId,
					pageSize,
				});
			}

			// ✅ MODE 2: Chronological / Infinite Scroll
			// If cursor is present, we are fetching older messages (scrolling up)
			// If cursor is missing, we fetch the latest messages (initial load)
			const whereClause: DirectMessageWhereInput = {
				conversationId,
				deleted: false,
				...(cursor && {
					createdAt: {
						lt: cursor, // Get messages older than cursor
					},
				}),
			};

			const messages = await prisma.directMessage.findMany({
				where: whereClause,
				include: {
					member: true, // Profile
					attachments: true,
					reactions: true,
					replyTo: {
						include: {
							member: true, // Profile
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
				nextCursor = messages[messages.length - 1].createdAt;
			}

			return {
				success: true,
				messages,
				nextCursor,
			};
		} catch (e) {
			console.error("[Get-Direct-Messages] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// ============================= HELPERS ======================================

/**
 * Helper to fetch messages surrounding a specific target ID.
 * Returns messages in DESC order (Newest -> Target -> Oldest).
 */
async function getMessagesAroundTarget({ conversationId, targetMessageId, pageSize }: { conversationId: string; targetMessageId: string; pageSize: number }) {
	// 1. Get Target Timestamp
	const targetMessage = await prisma.directMessage.findUnique({
		where: { id: targetMessageId },
		select: { createdAt: true, id: true },
	});

	if (!targetMessage) {
		throw ERRORS.NOT_FOUND;
	}

	const halfPage = Math.floor(pageSize / 2);

	// 2. Fetch Older (Before Target)
	const messagesBefore = await prisma.directMessage.findMany({
		where: {
			conversationId,
			deleted: false,
			createdAt: { lt: targetMessage.createdAt },
		},
		include: {
			member: true,
			attachments: true,
			reactions: true,
			replyTo: { include: { member: true, attachments: true } },
		},
		orderBy: { createdAt: "desc" },
		take: halfPage,
	});

	// 3. Fetch Target Details
	const targetWithDetails = await prisma.directMessage.findUnique({
		where: { id: targetMessageId },
		include: {
			member: true,
			attachments: true,
			reactions: true,
			replyTo: { include: { member: true, attachments: true } },
		},
	});

	// 4. Fetch Newer (After Target)
	const messagesAfter = await prisma.directMessage.findMany({
		where: {
			conversationId,
			deleted: false,
			createdAt: { gt: targetMessage.createdAt },
		},
		include: {
			member: true,
			attachments: true,
			reactions: true,
			replyTo: { include: { member: true, attachments: true } },
		},
		orderBy: { createdAt: "asc" }, // Fetch ascending to get immediate next messages
		take: halfPage,
	});

	// 5. Combine and Sort DESC
	const allMessages = [
		...messagesBefore.reverse(), // Oldest ... Older
		targetWithDetails!,
		...messagesAfter, // Newer ... Newest
	];

	// Reverse to return [Newest, ..., Target, ..., Oldest]
	const messagesInDescOrder = allMessages.reverse();

	return {
		success: true,
		messages: messagesInDescOrder,
		nextCursor: messagesBefore.length > 0 ? messagesBefore[messagesBefore.length - 1].createdAt : undefined,
		targetMessageId,
	};
}

/**
 * Action: Edit Direct Message
 * Description: Updates the content of a DM and marks it as edited.
 * Security: Only the original author can edit their message.
 */
export const editDirectMessageAction = actionClientWithProfile
	.metadata({ actionName: "edit-direct-message-action" })
	.inputSchema(EditDirectMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId, content } = parsedInput;

		// 1. Fetch message to verify ownership
		const message = await prisma.directMessage.findUnique({
			where: { id: messageId },
			include: { member: true }, // Include profile to check ID if needed, though memberId is on the model
		});

		if (!message) {
			throw ERRORS.NOT_FOUND;
		}

		// 2. Security: Only the author can edit in DMs
		if (message.memberId !== ctx.profile.id) {
			throw ERRORS.UNAUTHORIZED;
		}

		// 3. Validation: Cannot edit deleted messages
		if (message.deleted) {
			throw new Error("Cannot edit a deleted message");
		}

		try {
			// 4. Update Logic
			const updatedMessage = await prisma.directMessage.update({
				where: { id: messageId },
				data: {
					content,
					edited: true, // ✅ Flag as edited for UI
				},
				include: {
					member: true, // Profile
					attachments: true,
					reactions: true,
					replyTo: {
						include: {
							member: true, // Profile of parent message
							attachments: true,
						},
					},
				},
			});

			// 5. Broadcast Update
			const channelName = `conversation-${updatedMessage.conversationId}`;
			await pusherServer.trigger(channelName, MessageEvent.UPDATE, updatedMessage);

			return { success: true, data: { message: updatedMessage } };
		} catch (e) {
			console.error("[Edit-Direct-Message] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

/**
 * Action: Delete Direct Message
 * Description: Soft deletes a DM (clears content, sets deleted flag).
 * Security: Only the original author can delete (no Admin overrides in DMs).
 */
export const deleteDirectMessageAction = actionClientWithProfile
	.metadata({ actionName: "delete-direct-message-action" })
	.inputSchema(DeleteDirectMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId } = parsedInput;

		// 1. Fetch message
		const message = await prisma.directMessage.findUnique({
			where: { id: messageId },
		});

		if (!message) {
			throw ERRORS.NOT_FOUND;
		}

		// 2. Security: Only author can delete
		if (message.memberId !== ctx.profile.id) {
			throw ERRORS.UNAUTHORIZED;
		}

		try {
			// 3. Soft Delete Logic
			const deletedMessage = await prisma.directMessage.update({
				where: { id: messageId },
				data: {
					deleted: true,
					content: "This message has been deleted.", // Optional: clear content from DB text
					fileUrl: null, // Remove legacy file link
					// Note: You might want to delete related FileAttachments here too if you want to save space
				},
				include: {
					member: true, // Profile
					attachments: true,
					reactions: true,
					replyTo: {
						include: {
							member: true,
						},
					},
				},
			});

			// 4. Broadcast Delete
			const channelName = `conversation-${deletedMessage.conversationId}`;
			await pusherServer.trigger(channelName, MessageEvent.DELETE, deletedMessage);

			return { success: true, data: { message: deletedMessage } };
		} catch (e) {
			console.error("[Delete-Direct-Message] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

/**
 * Action: Pin/Unpin Direct Message
 * Description: Toggles the pinned status of a DM.
 * Security: Verifies the user is a participant in the conversation (MemberOne or MemberTwo).
 */
export const pinDirectMessageAction = actionClientWithProfile
	.metadata({ actionName: "pin-direct-message-action" })
	.inputSchema(PinMessageSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { messageId } = parsedInput;

		// 1. Fetch message with Conversation details to check participation
		const message = await prisma.directMessage.findUnique({
			where: { id: messageId },
			include: {
				conversation: true,
			},
		});

		if (!message || message.deleted) {
			throw ERRORS.NOT_FOUND;
		}

		// 2. Security: User must be a participant in the DM
		const isParticipant = message.conversation.memberOneId === ctx.profile.id || message.conversation.memberTwoId === ctx.profile.id;

		if (!isParticipant) {
			throw ERRORS.UNAUTHORIZED;
		}

		try {
			// 3. Toggle Pinned Status
			const updatedMessage = await prisma.directMessage.update({
				where: { id: messageId },
				data: {
					pinned: !message.pinned,
				},
				include: {
					member: true, // Profile
					attachments: true,
					reactions: true,
					replyTo: {
						include: {
							member: true,
						},
					},
				},
			});

			// 4. Broadcast Update
			const channelName = `conversation-${message.conversationId}`;
			await pusherServer.trigger(channelName, MessageEvent.UPDATE, updatedMessage);

			return { success: true, data: { message: updatedMessage } };
		} catch (e) {
			console.error("[Pin-DM-Action] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

/**
 * Action: Get Pinned Direct Message
 * Description: Fetches the single most recent pinned message for the pinned banner.
 */
export const getPinnedDirectMessageAction = actionClientWithProfile
	.metadata({ actionName: "get-pinned-dm-action" })
	.inputSchema(GetPinMessageSchema)
	.action(async ({ parsedInput }) => {
		const { conversationId } = parsedInput;

		try {
			const pinnedMessage = await prisma.directMessage.findFirst({
				where: {
					conversationId,
					pinned: true,
					// Optionally exclude deleted messages from the banner
					deleted: false,
				},
				include: {
					member: true, // Profile
					attachments: true,
					// We don't need reactions/replies for the small banner preview
				},
				orderBy: {
					createdAt: "desc", // Get the latest one
				},
			});

			return { success: true, message: pinnedMessage };
		} catch (e) {
			console.error("[Get-Pinned-DM-Action] Error:", e);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});

// ============================= SEARCH MESSAGES ======================================

export const searchDirectMessagesAction = actionClientWithProfile
	.metadata({ actionName: "search-dm-action" })
	.inputSchema(SearchMessagesSchema)
	.action(async ({ ctx, parsedInput }) => {
		const { conversationId, query } = parsedInput;

		// Security: Ensure user is participant
		const conversation = await prisma.conversation.findFirst({
			where: {
				id: conversationId,
				OR: [{ memberOneId: ctx.profile.id }, { memberTwoId: ctx.profile.id }],
			},
		});

		if (!conversation) throw ERRORS.UNAUTHORIZED;

		const messages = await prisma.directMessage.findMany({
			where: {
				conversationId,
				content: {
					contains: query,
					mode: "insensitive",
				},
				deleted: false,
			},
			include: {
				member: true, // Profile
				attachments: true,
			},
			orderBy: { createdAt: "desc" },
			take: 20,
		});

		return { success: true, messages };
	});
