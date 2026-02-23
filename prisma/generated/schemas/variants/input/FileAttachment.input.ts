import * as z from 'zod';
// prettier-ignore
export const FileAttachmentInputSchema = z.object({
    id: z.string(),
    url: z.string(),
    name: z.string(),
    type: z.string(),
    size: z.number().int().optional().nullable(),
    messageId: z.string().optional().nullable(),
    message: z.unknown().optional().nullable(),
    directMessageId: z.string().optional().nullable(),
    directMessage: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict();

export type FileAttachmentInputType = z.infer<typeof FileAttachmentInputSchema>;
