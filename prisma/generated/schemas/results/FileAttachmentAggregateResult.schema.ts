import * as z from 'zod';
export const FileAttachmentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    url: z.number(),
    name: z.number(),
    type: z.number(),
    size: z.number(),
    messageId: z.number(),
    message: z.number(),
    directMessageId: z.number(),
    directMessage: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    size: z.number().int().nullable(),
    messageId: z.string().nullable(),
    directMessageId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    url: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    size: z.number().int().nullable(),
    messageId: z.string().nullable(),
    directMessageId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});