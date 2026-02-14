import * as z from 'zod';
export const DirectMessageUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  content: z.string(),
  fileUrl: z.string().optional(),
  memberId: z.string(),
  member: z.unknown(),
  conversationId: z.string(),
  conversation: z.unknown(),
  deleted: z.boolean(),
  edited: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));