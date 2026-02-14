import * as z from 'zod';
export const ConversationGroupByResultSchema = z.array(z.object({
  id: z.string(),
  memberOneId: z.string(),
  memberTwoId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    memberOneId: z.number(),
    memberOne: z.number(),
    memberTwoId: z.number(),
    memberTwo: z.number(),
    directMessages: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    memberOneId: z.string().nullable(),
    memberTwoId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    memberOneId: z.string().nullable(),
    memberTwoId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));