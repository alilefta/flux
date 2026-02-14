import * as z from 'zod';
import { AuditLogActionSchema } from '../../enums/AuditLogAction.schema';
// prettier-ignore
export const AuditLogResultSchema = z.object({
    id: z.string(),
    action: AuditLogActionSchema,
    serverId: z.string(),
    server: z.unknown(),
    userId: z.string(),
    targetId: z.string().nullable(),
    metadata: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type AuditLogResultType = z.infer<typeof AuditLogResultSchema>;
