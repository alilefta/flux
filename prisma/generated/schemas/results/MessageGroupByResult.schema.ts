import * as z from 'zod';
export const MessageGroupByResultSchema = z.array(z.object({
  id: z.string(),
  content: z.string(),
  fileUrl: z.string(),
  memberId: z.string(),
  channelId: z.string(),
  deleted: z.boolean(),
  edited: z.boolean(),
  pinned: z.boolean(),
  replyToId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    content: z.number(),
    fileUrl: z.number(),
    memberId: z.number(),
    member: z.number(),
    channelId: z.number(),
    channel: z.number(),
    deleted: z.number(),
    edited: z.number(),
    pinned: z.number(),
    attachments: z.number(),
    reactions: z.number(),
    replyToId: z.number(),
    replyTo: z.number(),
    replies: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    fileUrl: z.string().nullable(),
    memberId: z.string().nullable(),
    channelId: z.string().nullable(),
    replyToId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    fileUrl: z.string().nullable(),
    memberId: z.string().nullable(),
    channelId: z.string().nullable(),
    replyToId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));