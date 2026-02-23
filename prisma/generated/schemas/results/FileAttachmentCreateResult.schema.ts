import * as z from 'zod';
export const FileAttachmentCreateResultSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional(),
  messageId: z.string().optional(),
  message: z.unknown().optional(),
  directMessageId: z.string().optional(),
  directMessage: z.unknown().optional(),
  createdAt: z.date()
});