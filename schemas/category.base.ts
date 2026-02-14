import { ChannelCategoryModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const ChannelCategoryBaseSchema = ChannelCategoryModelSchema.omit({
	channels: true,
	server: true,
});

export type ChannelCategoryBase = z.infer<typeof ChannelCategoryBaseSchema>;
