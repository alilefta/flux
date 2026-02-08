import * as z from 'zod';
export const MessageFindManyResultSchema = z.object({
  data: z.array(z.object({
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