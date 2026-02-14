import * as z from 'zod';
export const ChannelAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    type: z.number(),
    topic: z.number(),
    position: z.number(),
    profileId: z.number(),
    profile: z.number(),
    serverId: z.number(),
    server: z.number(),
    categoryId: z.number(),
    category: z.number(),
    messages: z.number(),
    isDefault: z.number(),
    isLocked: z.number(),
    slowModeRate: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    position: z.number().nullable(),
    slowModeRate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    position: z.number().nullable(),
    slowModeRate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    topic: z.string().nullable(),
    position: z.number().int().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    categoryId: z.string().nullable(),
    slowModeRate: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    topic: z.string().nullable(),
    position: z.number().int().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    categoryId: z.string().nullable(),
    slowModeRate: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});