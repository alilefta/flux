import * as z from 'zod';
export const ChannelAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    type: z.number(),
    profileId: z.number(),
    profile: z.number(),
    serverId: z.number(),
    server: z.number(),
    messages: z.number(),
    isDefault: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    profileId: z.string().nullable(),
    serverId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});