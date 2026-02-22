import * as z from 'zod';
// prettier-ignore
export const FileAttachmentResultSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string(),
    type: z.string(),
    size: z.number().int().nullable(),
    messageId: z.string(),
    message: z.unknown(),
    directMessageId: z.string().nullable(),
    directMessage: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type FileAttachmentResultType = z.infer<typeof FileAttachmentResultSchema>;
