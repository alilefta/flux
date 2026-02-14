import * as z from 'zod';
export const ConversationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  memberOneId: z.string(),
  memberOne: z.unknown(),
  memberTwoId: z.string(),
  memberTwo: z.unknown(),
  directMessages: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
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