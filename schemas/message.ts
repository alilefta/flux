// /schemas/message.ts

import { MessageModelSchema, FileAttachmentModelSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { ProfileBaseSchema } from "./profile";
import { MemberBaseSchema, MemberWithProfileSchema } from "./member";

// ============================= BASE SCHEMAS ======================================
export const MessageBaseSchema = MessageModelSchema.omit({
	member: true,
	channel: true,
	attachments: true,
	reactions: true,
	replyTo: true,
	replies: true,
});

export type MessageBase = z.infer<typeof MessageBaseSchema>;

//  File Attachment Schema
export const FileAttachmentSchema = FileAttachmentModelSchema.omit({
	message: true,
});

export type FileAttachment = z.infer<typeof FileAttachmentSchema>;

// ============================= DTOs ======================================

export const MessageReactionSchema = z.object({
	id: z.uuid(),
	emoji: z.string().min(1),
	messageId: z.uuid(),
	profileId: z.uuid(),
	createdAt: z.date(),
});

export type MessageReaction = z.infer<typeof MessageReactionSchema>;

export const ReplyMessageDTO = MessageBaseSchema.extend({
	member: MemberBaseSchema.extend({
		profile: ProfileBaseSchema.pick({
			id: true,
			name: true,
			imageUrl: true,
			clerkId: true,
			email: true,
			createdAt: true,
			updatedAt: true,
		}),
	}),
	attachments: z.array(FileAttachmentSchema).optional(),
});

export type ReplyMessage = z.infer<typeof ReplyMessageDTO>;

//  Channel Message DTO (with full relations)
export const ChannelMessageDTO = MessageBaseSchema.extend({
	member: MemberBaseSchema.extend({
		profile: ProfileBaseSchema.pick({
			id: true,
			name: true,
			imageUrl: true,
			clerkId: true,
			email: true,
			createdAt: true,
			updatedAt: true,
		}),
	}),
	replyTo: ReplyMessageDTO.nullable().optional(),
	attachments: z.array(FileAttachmentSchema),
	reactions: z.array(MessageReactionSchema).optional(),
});

export type ChannelMessage = z.infer<typeof ChannelMessageDTO>;

// Message Preview (for sidebar/notifications)
export const MessagePreviewDTO = MessageBaseSchema.pick({
	id: true,
	content: true,
	createdAt: true,
	edited: true,
});

export type MessagePreview = z.infer<typeof MessagePreviewDTO>;

// ============================= INPUT SCHEMAS ======================================

export const FileUploadSchema = z.object({
	url: z.url(),
	name: z.string().min(1),
	type: z.string().min(1),
	size: z.number().positive().optional(),
});

export type FileUploadInput = z.infer<typeof FileUploadSchema>;

export const CreateMessageSchema = z
	.object({
		content: z.string().max(2000).optional().default(""),
		files: z.array(FileUploadSchema).max(10).optional(), // ✅ Accept file objects
		channelId: z.uuid(),
		replyToId: z.uuid().nullable().optional(),
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

export type CreateMessageInput = z.infer<typeof CreateMessageSchema>;

// Edit Message Input
export const EditMessageSchema = z.object({
	messageId: z.uuid(),
	content: z.string().min(1, "Message cannot be empty").max(2000),
});

export type EditMessageInput = z.infer<typeof EditMessageSchema>;

// Delete Message Input
export const DeleteMessageSchema = z.object({
	messageId: z.uuid(),
});

export type DeleteMessageInput = z.infer<typeof DeleteMessageSchema>;

// Get Messages Input (for pagination)
export const GetMessageInputSchema = z.object({
	channelId: z.uuid(),
	serverId: z.uuid(),
	cursor: z.date().optional(),
});

export type GetMessageInput = z.infer<typeof GetMessageInputSchema>;

// ✅ Reaction Input Schemas
export const AddReactionSchema = z.object({
	messageId: z.uuid(),
	emoji: z.string().min(1).max(10),
});

export type AddReactionInput = z.infer<typeof AddReactionSchema>;

export const RemoveReactionSchema = z.object({
	messageId: z.uuid(),
	emoji: z.string().min(1).max(10),
});

export type RemoveReactionInput = z.infer<typeof RemoveReactionSchema>;
