// Add to src/types/index.ts

import { MessageModelSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { ProfileBaseSchema } from "./profile";
import { MemberBaseSchema } from "./member";
export const MessageBaseSchema = MessageModelSchema.omit({
	member: true,
	channel: true,
});

export type MessageBase = z.infer<typeof MessageBaseSchema>;

export const ChannelMessageDTO = MessageBaseSchema.extend(
	z.object({
		member: MemberBaseSchema.extend(
			z.object({
				profile: ProfileBaseSchema.pick({
					id: true,
					name: true,
					imageUrl: true,
					clerkId: true,
					email: true,
					createdAt: true,
					updatedAt: true,
				}),
			}).shape,
		),
	}).shape,
);

export type ChannelMessage = z.infer<typeof ChannelMessageDTO>;

export const MessagePreviewDTO = MessageBaseSchema.pick({
	id: true,
	content: true,
	createdAt: true,
	edited: true,
});

export type MessagePreview = z.infer<typeof MessagePreviewDTO>;

export const CreateMessageInput = z.object({
	content: z.string().min(1),
	fileUrl: z.url().optional(),
	channelId: z.uuid(),
});

export type SendMessageInput = z.infer<typeof CreateMessageInput>;

export const UpdateMessageSchema = z.object({
	messageId: z.string(),
	content: z.string().min(1, "Message cannot be empty"),
});

export type UpdateMessageInput = z.infer<typeof UpdateMessageSchema>;

export const GetMessageInputSchema = z.object({
	channelId: z.string(),
	serverId: z.string(),
	cursor: z.date().optional(),
});

export type GetMessageInput = z.infer<typeof GetMessageInputSchema>;

export const DeleteMessageSchema = z.object({
	messageId: z.string(),
});

export type DeleteMessageInput = z.infer<typeof DeleteMessageSchema>;
