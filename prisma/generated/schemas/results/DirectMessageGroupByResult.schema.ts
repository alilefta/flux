import * as z from 'zod';
export const DirectMessageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  content: z.string(),
  fileUrl: z.string(),
  memberId: z.string(),
  conversationId: z.string(),
  deleted: z.boolean(),
  edited: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    content: z.number(),
    fileUrl: z.number(),
    memberId: z.number(),
    member: z.number(),
    conversationId: z.number(),
    conversation: z.number(),
    deleted: z.number(),
    edited: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    fileUrl: z.string().nullable(),
    memberId: z.string().nullable(),
    conversationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    fileUrl: z.string().nullable(),
    memberId: z.string().nullable(),
    conversationId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));