import * as z from 'zod';
export const AuditLogCreateResultSchema = z.object({
  id: z.string(),
  action: z.unknown(),
  serverId: z.string(),
  server: z.unknown(),
  userId: z.string(),
  targetId: z.string().optional(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
});