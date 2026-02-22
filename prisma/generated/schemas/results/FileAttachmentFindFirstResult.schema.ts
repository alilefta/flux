import * as z from 'zod';
export const FileAttachmentFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional(),
  messageId: z.string(),
  message: z.unknown(),
  directMessageId: z.string().optional(),
  directMessage: z.unknown().optional(),
  createdAt: z.date()
}));