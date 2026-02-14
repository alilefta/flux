import * as z from 'zod';
export const FileAttachmentUpsertResultSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional(),
  messageId: z.string(),
  message: z.unknown(),
  createdAt: z.date()
});