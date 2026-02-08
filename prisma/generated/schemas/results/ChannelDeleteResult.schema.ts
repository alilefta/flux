import * as z from 'zod';
export const ChannelDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  type: z.unknown(),
  profileId: z.string(),
  profile: z.unknown(),
  serverId: z.string(),
  server: z.unknown(),
  messages: z.array(z.unknown()),
  isDefault: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
}));