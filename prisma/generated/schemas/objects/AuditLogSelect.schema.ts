import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  action: z.boolean().optional(),
  serverId: z.boolean().optional(),
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  targetId: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const AuditLogSelectObjectSchema: z.ZodType<Prisma.AuditLogSelect> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogSelect>;
export const AuditLogSelectObjectZodSchema = makeSchema();
