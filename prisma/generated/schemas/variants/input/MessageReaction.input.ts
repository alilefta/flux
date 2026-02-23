import * as z from 'zod';
// prettier-ignore
export const MessageReactionInputSchema = z.object({
    id: z.string(),
    emoji: z.string(),
    messageId: z.string().optional().nullable(),
    message: z.unknown().optional().nullable(),
    directMessageId: z.string().optional().nullable(),
    directMessage: z.unknown().optional().nullable(),
    profileId: z.string(),
    profile: z.unknown(),
    createdAt: z.date()
}).strict();

export type MessageReactionInputType = z.infer<typeof MessageReactionInputSchema>;
