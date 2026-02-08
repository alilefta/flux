import * as z from 'zod';
export const MemberGroupByResultSchema = z.array(z.object({
  id: z.string(),
  profileId: z.string(),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    role: z.number(),
    profileId: z.number(),
    profile: z.number(),
    serverId: z.number(),
    server: z.number(),
    messages: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));