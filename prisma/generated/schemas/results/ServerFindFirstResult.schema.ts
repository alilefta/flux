import * as z from 'zod';
export const ServerFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  description: z.string().optional(),
  memberCount: z.number().int(),
  profileId: z.string(),
  profile: z.unknown(),
  members: z.array(z.unknown()),
  channels: z.array(z.unknown()),
  categories: z.array(z.unknown()),
  auditLog: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));