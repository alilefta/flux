import * as z from 'zod';
// prettier-ignore
export const DirectMessageModelSchema = z.object({
    id: z.string(),
    content: z.string(),
    fileUrl: z.string().nullable(),
    memberId: z.string(),
    member: z.unknown(),
    conversationId: z.string(),
    conversation: z.unknown(),
    deleted: z.boolean(),
    edited: z.boolean(),
    pinned: z.boolean(),
    attachments: z.array(z.unknown()),
    reactions: z.array(z.unknown()),
    replyToId: z.string().nullable(),
    replyTo: z.unknown().nullable(),
    replies: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DirectMessagePureType = z.infer<typeof DirectMessageModelSchema>;
