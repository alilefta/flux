import { ChannelModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const ChannelBaseSchema = ChannelModelSchema.omit({
	server: true,
	profile: true,
	messages: true,
	category: true,
});

export type ChannelBase = z.infer<typeof ChannelBaseSchema>;
