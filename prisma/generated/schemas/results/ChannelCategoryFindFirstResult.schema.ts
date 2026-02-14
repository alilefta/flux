import * as z from 'zod';
export const ChannelCategoryFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  position: z.number().int(),
  serverId: z.string(),
  server: z.unknown(),
  channels: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));