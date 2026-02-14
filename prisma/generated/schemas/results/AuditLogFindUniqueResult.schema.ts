import * as z from 'zod';
export const AuditLogFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  action: z.unknown(),
  serverId: z.string(),
  server: z.unknown(),
  userId: z.string(),
  targetId: z.string().optional(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
}));