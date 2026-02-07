import { ChannelModelSchema, ChannelTypeSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { MessageBaseSchema } from "./message";
export const ChannelBaseSchema = ChannelModelSchema.omit({
	server: true,
	profile: true,
	messages: true,
});

export type ChannelBase = z.infer<typeof ChannelBaseSchema>;

export const ChannelListItemDTO = ChannelBaseSchema.pick({
	id: true,
	name: true,
	type: true,
	isDefault: true,
});

export type ChannelListItem = z.infer<typeof ChannelListItemDTO>;

export const ChannelWithMessagesDTO = ChannelBaseSchema.extend(
	z.object({
		messages: z.array(MessageBaseSchema),
	}),
);

export type ChannelWithMessages = z.infer<typeof ChannelWithMessagesDTO>;

export const CreateChannelInput = z.object({
	name: z.string().min(1).max(100),
	type: ChannelTypeSchema,
	serverId: z.uuid(),
});

export type CreateChannelInput = z.infer<typeof CreateChannelInput>;

export const UpdateChannelInput = z.object({
	name: z.string().min(1).max(100).optional(),
});

export type UpdateChannelInput = z.infer<typeof UpdateChannelInput>;
