import * as z from 'zod';
export const MessageReactionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  emoji: z.string(),
  messageId: z.string(),
  message: z.unknown(),
  directMessageId: z.string().optional(),
  directMessage: z.unknown().optional(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});