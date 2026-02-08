import * as z from 'zod';
// prettier-ignore
export const MessageResultSchema = z.object({
    id: z.string(),
    content: z.string(),
    fileUrl: z.string().nullable(),
    memberId: z.string(),
    member: z.unknown(),
    channelId: z.string(),
    channel: z.unknown(),
    deleted: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    edited: z.boolean()
}).strict();

export type MessageResultType = z.infer<typeof MessageResultSchema>;
