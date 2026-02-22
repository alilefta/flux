import z from "zod";
import { DirectMessageBaseSchema } from "../direct-message.base";
import { ConversationBaseSchema } from "../conversation.base";
import { MemberBaseSchema } from "../member";
import { ProfileBaseSchema } from "../profile";
import { FileAttachmentModelSchema } from "@/prisma/generated/schemas";
import { MessageReactionSchema } from "../message-reaction.base";
import { FileUploadSchema } from "../file-attachement.base";

// export const ReplyMessageDTO = MessageBaseSchema.extend({
// 	member: MemberBaseSchema.extend({
// 		profile: ProfileBaseSchema.pick({
// 			id: true,
// 			name: true,
// 			imageUrl: true,
// 			clerkId: true,
// 			email: true,
// 			createdAt: true,
// 			updatedAt: true,
// 		}),
// 	}),
// 	attachments: z.array(FileAttachmentSchema).optional(),
// });

// full relations
// export const ChannelMessageDTO = MessageBaseSchema.extend({
// 	member: MemberBaseSchema.extend({
// 		profile: ProfileBaseSchema.pick({
// 			id: true,
// 			name: true,
// 			imageUrl: true,
// 			clerkId: true,
// 			email: true,
// 			createdAt: true,
// 			updatedAt: true,
// 		}),
// 	}),
// 	replyTo: ReplyMessageDTO.nullable().optional(),
// 	attachments: z.array(FileAttachmentSchema),
// 	reactions: z.array(MessageReactionSchema).optional(),
// });

//  File Attachment Schema
export const FileAttachmentSchema = FileAttachmentModelSchema.omit({
	directMessage: true,
	message: true,
});

export type FileAttachment = z.infer<typeof FileAttachmentSchema>;

export const ReplyDirectMessageDTO = DirectMessageBaseSchema.extend({
	member: ProfileBaseSchema.pick({
		id: true,
		name: true,
		imageUrl: true,
		clerkId: true,
		email: true,
		createdAt: true,
		updatedAt: true,
	}),
	attachments: z.array(FileAttachmentSchema).optional(),
});

export type ReplyDirectMessage = z.infer<typeof ReplyDirectMessageDTO>;

export const DirectChatMessageSchema = DirectMessageBaseSchema.extend(
	z.object({
		conversation: ConversationBaseSchema,
		member: MemberBaseSchema,
		replyTo: ReplyDirectMessageDTO.nullable().optional(),
		attachments: z.array(FileAttachmentSchema),
		reactions: z.array(MessageReactionSchema).optional(),
	}).shape,
);

export type DirectChatMessage = z.infer<typeof DirectChatMessageSchema>;

export const CreateDirectMessageSchema = z
	.object({
		content: z.string().max(2000).optional().default(""),
		files: z.array(FileUploadSchema).max(10).optional(), // ✅ Accept file objects
		conversationId: z.uuid(),
		replyToId: z.uuid().nullable().optional(),
		optimisticClientId: z.string().optional(),
	})
	.refine(
		(data) => {
			const hasContent = data.content && data.content.trim().length > 0;
			const hasFiles = data.files && data.files.length > 0;
			return hasContent || hasFiles;
		},
		{
			message: "Message must have either text content or file attachments",
		},
	);

export type CreateDirectMessageInput = z.infer<typeof CreateDirectMessageSchema>;

// Edit Message Input
export const EditDirectMessageSchema = z.object({
	messageId: z.uuid(),
	content: z.string().min(1, "Message cannot be empty").max(2000),
});

export type EditMessageInput = z.infer<typeof EditDirectMessageSchema>;

// Delete Message Input
export const DeleteDirectMessageSchema = z.object({
	messageId: z.uuid(),
});

export type DeleteDirectMessageInput = z.infer<typeof DeleteDirectMessageSchema>;

// Get Messages Input (for pagination)
export const GetDirectMessageInputSchema = z.object({
	conversationId: z.uuid(),
	// serverId: z.uuid(),
	cursor: z.date().optional(),

	// ✅ NEW: Jump mode
	mode: z.enum(["chronological", "around"]).default("chronological"),
	targetMessageId: z.string().optional(), // Required when mode = 'around'
});

export type GetDirectMessageInput = z.infer<typeof GetDirectMessageInputSchema>;

// ✅ Reaction Input Schemas
export const AddDirectMessageReactionSchema = z.object({
	messageId: z.uuid(),
	emoji: z.string().min(1).max(10),
});

export type AddDirectMessageReactionInput = z.infer<typeof AddDirectMessageReactionSchema>;

export const RemoveDirectMessageReactionSchema = z.object({
	messageId: z.uuid(),
	emoji: z.string().min(1).max(10),
});

export type RemoveDirectMessageReactionInput = z.infer<typeof RemoveDirectMessageReactionSchema>;

export const PinMessageSchema = z.object({
	messageId: z.uuid(),
});

export type PinMessageInput = z.infer<typeof PinMessageSchema>;

export const GetPinMessageSchema = z.object({
	conversationId: z.uuid(),
});

export type GetPinMessageInput = z.infer<typeof GetPinMessageSchema>;

export const SearchMessagesSchema = z.object({ conversationId: z.uuid(), query: z.string() });

export type SearchMessagesInput = z.infer<typeof SearchMessagesSchema>;
