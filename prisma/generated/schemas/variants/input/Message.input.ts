import * as z from 'zod';
// prettier-ignore
export const MessageInputSchema = z.object({
    id: z.string(),
    content: z.string(),
    fileUrl: z.string().optional().nullable(),
    memberId: z.string(),
    member: z.unknown(),
    channelId: z.string(),
    channel: z.unknown(),
    deleted: z.boolean(),
    edited: z.boolean(),
    pinned: z.boolean(),
    attachments: z.array(z.unknown()),
    reactions: z.array(z.unknown()),
    replyToId: z.string().optional().nullable(),
    replyTo: z.unknown().optional().nullable(),
    replies: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MessageInputType = z.infer<typeof MessageInputSchema>;
