import { MessageReactionModelSchema } from "@/prisma/generated/schemas";
import z from "zod";

export const MessageReactionSchema = MessageReactionModelSchema.omit({
	directMessage: true,
	message: true,
	profile: true,
});

export type MessageReaction = z.infer<typeof MessageReactionSchema>;
