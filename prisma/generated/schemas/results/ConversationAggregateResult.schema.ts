import * as z from 'zod';
export const ConversationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    memberOneId: z.number(),
    memberOne: z.number(),
    memberTwoId: z.number(),
    memberTwo: z.number(),
    directMessages: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    memberOneId: z.string().nullable(),
    memberTwoId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    memberOneId: z.string().nullable(),
    memberTwoId: z.string().nullable()
  }).nullable().optional()});