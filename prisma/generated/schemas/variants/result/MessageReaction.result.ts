import * as z from 'zod';
// prettier-ignore
export const MessageReactionResultSchema = z.object({
    id: z.string(),
    emoji: z.string(),
    messageId: z.string(),
    message: z.unknown(),
    directMessageId: z.string().nullable(),
    directMessage: z.unknown().nullable(),
    memberId: z.string(),
    profileId: z.string(),
    createdAt: z.date()
}).strict();

export type MessageReactionResultType = z.infer<typeof MessageReactionResultSchema>;
