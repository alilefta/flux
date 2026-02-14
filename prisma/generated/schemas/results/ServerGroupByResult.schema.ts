import * as z from 'zod';
export const ServerGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  imageUrl: z.string(),
  inviteCode: z.string(),
  description: z.string(),
  memberCount: z.number().int(),
  profileId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    imageUrl: z.number(),
    inviteCode: z.number(),
    description: z.number(),
    memberCount: z.number(),
    profileId: z.number(),
    profile: z.number(),
    members: z.number(),
    channels: z.number(),
    categories: z.number(),
    auditLog: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    memberCount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    memberCount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    imageUrl: z.string().nullable(),
    inviteCode: z.string().nullable(),
    description: z.string().nullable(),
    memberCount: z.number().int().nullable(),
    profileId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    imageUrl: z.string().nullable(),
    inviteCode: z.string().nullable(),
    description: z.string().nullable(),
    memberCount: z.number().int().nullable(),
    profileId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));