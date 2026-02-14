import * as z from 'zod';
export const MessageReactionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    emoji: z.number(),
    messageId: z.number(),
    message: z.number(),
    memberId: z.number(),
    profileId: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    emoji: z.string().nullable(),
    messageId: z.string().nullable(),
    memberId: z.string().nullable(),
    profileId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    emoji: z.string().nullable(),
    messageId: z.string().nullable(),
    memberId: z.string().nullable(),
    profileId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});