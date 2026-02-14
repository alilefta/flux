import * as z from 'zod';
export const ChannelCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.unknown(),
  topic: z.string().optional(),
  position: z.number().int(),
  profileId: z.string(),
  profile: z.unknown(),
  serverId: z.string(),
  server: z.unknown(),
  categoryId: z.string().optional(),
  category: z.unknown().optional(),
  messages: z.array(z.unknown()),
  isDefault: z.boolean(),
  isLocked: z.boolean(),
  slowModeRate: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});