import z from "zod";
import { ServerBaseSchema } from "../server.base";
import { ChannelBaseSchema } from "../channel";
import { ChannelCategoryBaseSchema } from "../category.base";

export const ChannelCategoryDetailsDTOSchema = ChannelCategoryBaseSchema.extend({
	channels: z.array(ChannelBaseSchema),
	server: ServerBaseSchema,
});

export type ChannelCategoryDetailsDTOS = z.infer<typeof ChannelCategoryDetailsDTOSchema>;
