import { ChannelTypeSchema } from "@/prisma/generated/schemas";
import z from "zod";
import { MessageBaseSchema } from "@/schemas/message";
import { ChannelBaseSchema } from "@/schemas/channel";

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
	}).shape,
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
	serverId: z.uuid(),
	channelId: z.uuid(),
});

export type UpdateChannelInput = z.infer<typeof UpdateChannelInput>;

export const DeleteChannelSchema = z.object({
	serverId: z.uuid(),
	channelId: z.uuid(),
});

export type DeleteChannelInput = z.infer<typeof DeleteChannelSchema>;
