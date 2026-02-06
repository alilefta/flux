import * as z from 'zod';
export const MemberFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  role: z.unknown(),
  profileId: z.string(),
  profile: z.unknown(),
  serverId: z.string(),
  server: z.unknown(),
  messages: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));