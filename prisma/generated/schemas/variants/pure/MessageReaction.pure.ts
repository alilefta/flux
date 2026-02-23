import * as z from 'zod';
// prettier-ignore
export const MessageReactionModelSchema = z.object({
    id: z.string(),
    emoji: z.string(),
    messageId: z.string().nullable(),
    message: z.unknown().nullable(),
    directMessageId: z.string().nullable(),
    directMessage: z.unknown().nullable(),
    profileId: z.string(),
    profile: z.unknown(),
    createdAt: z.date()
}).strict();

export type MessageReactionPureType = z.infer<typeof MessageReactionModelSchema>;
