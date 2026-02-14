import * as z from 'zod';
// prettier-ignore
export const MessageReactionInputSchema = z.object({
    id: z.string(),
    emoji: z.string(),
    messageId: z.string(),
    message: z.unknown(),
    memberId: z.string(),
    profileId: z.string(),
    createdAt: z.date()
}).strict();

export type MessageReactionInputType = z.infer<typeof MessageReactionInputSchema>;
