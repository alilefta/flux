import z from "zod";

export const MessageReactionSchema = z.object({
	id: z.uuid(),
	emoji: z.string().min(1),
	messageId: z.uuid(),
	profileId: z.uuid(),
	createdAt: z.date(),
});

export type MessageReaction = z.infer<typeof MessageReactionSchema>;
