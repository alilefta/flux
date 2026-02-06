import * as z from 'zod';
export const ServerAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    imageUrl: z.number(),
    inviteCode: z.number(),
    profileId: z.number(),
    profile: z.number(),
    members: z.number(),
    channels: z.number(),
    memberCount: z.number(),
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
    profileId: z.string().nullable(),
    memberCount: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    imageUrl: z.string().nullable(),
    inviteCode: z.string().nullable(),
    profileId: z.string().nullable(),
    memberCount: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});