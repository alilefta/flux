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
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DirectMessagePureType = z.infer<typeof DirectMessageModelSchema>;
