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

export const ChannelMessageDTO = MessageBaseSchema.merge(
	z.object({
		member: MemberBaseSchema.merge(
			z.object({
				profile: ProfileBaseSchema.pick({
					id: true,
					name: true,
					imageUrl: true,
				}),
			}),
		),
	}),
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
	fileUrl: z.string().url().optional(),
	channelId: z.string().uuid(),
});

export type CreateMessageInput = z.infer<typeof CreateMessageInput>;

export const UpdateMessageInput = z.object({
	content: z.string().min(1),
});

export type UpdateMessageInput = z.infer<typeof UpdateMessageInput>;
