import * as z from 'zod';
export const AuditLogAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    action: z.number(),
    serverId: z.number(),
    server: z.number(),
    userId: z.number(),
    targetId: z.number(),
    metadata: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    serverId: z.string().nullable(),
    userId: z.string().nullable(),
    targetId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    serverId: z.string().nullable(),
    userId: z.string().nullable(),
    targetId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});