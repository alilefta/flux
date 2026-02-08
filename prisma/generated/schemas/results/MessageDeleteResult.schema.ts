import * as z from 'zod';
export const MessageDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  content: z.string(),
  fileUrl: z.string().optional(),
  memberId: z.string(),
  member: z.unknown(),
  channelId: z.string(),
  channel: z.unknown(),
  deleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  edited: z.boolean()
}));