import * as z from 'zod';
export const ProfileFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string().optional(),
  email: z.string(),
  servers: z.array(z.unknown()),
  members: z.array(z.unknown()),
  channels: z.array(z.unknown()),
  conversationsInitiated: z.array(z.unknown()),
  conversationsReceived: z.array(z.unknown()),
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