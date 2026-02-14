import * as z from 'zod';
import { AuditLogActionSchema } from '../../enums/AuditLogAction.schema';
// prettier-ignore
export const AuditLogInputSchema = z.object({
    id: z.string(),
    action: AuditLogActionSchema,
    serverId: z.string(),
    server: z.unknown(),
    userId: z.string(),
    targetId: z.string().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict();

export type AuditLogInputType = z.infer<typeof AuditLogInputSchema>;
