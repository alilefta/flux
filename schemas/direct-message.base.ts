import { DirectMessageModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const DirectMessageBaseSchema = DirectMessageModelSchema.omit({
	conversation: true,
	member: true,

	attachments: true,
	reactions: true,
	replyTo: true,
	replies: true,
});

export type DirectMessageBase = z.infer<typeof DirectMessageBaseSchema>;
