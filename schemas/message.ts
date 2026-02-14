// /schemas/message.ts

import { MessageModelSchema, FileAttachmentModelSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { ProfileBaseSchema } from "./profile";
import { MemberBaseSchema } from "./member";

// ============================= BASE SCHEMAS ======================================

export const MessageBaseSchema = MessageModelSchema.omit({
	member: true,
	channel: true,
	attachments: true, // ✅ Omit relations
	reactions: true,
	replyTo: true,
	replies: true,
});

export type MessageBase = z.infer<typeof MessageBaseSchema>;

// ✅ File Attachment Schema
export const FileAttachmentSchema = FileAttachmentModelSchema.omit({
	message: true, // Omit relation
});

export type FileAttachment = z.infer<typeof FileAttachmentSchema>;

// ============================= DTOs ======================================

// ✅ Channel Message DTO (with full relations)
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
	attachments: z.array(FileAttachmentSchema), // ✅ Include attachments
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

// ✅ Create Message Input
export const CreateMessageInput = z
	.object({
		content: z.string().max(2000).optional().default(""), // ✅ Optional if files present
		fileUrls: z.array(z.url()).max(10).optional(), // ✅ Max 10 files
		channelId: z.uuid(),
		replyToId: z.uuid().optional(), // ✅ Reply threading
	})
	.refine(
		(data) => {
			const hasContent = data.content && data.content.trim().length > 0;
			const hasFiles = data.fileUrls && data.fileUrls.length > 0;
			return hasContent || hasFiles;
		},
		{
			message: "Message must have either text content or file attachments",
		},
	);

export type CreateMessageInput = z.infer<typeof CreateMessageInput>;

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
