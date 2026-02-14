import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogWhereInputObjectSchema as AuditLogWhereInputObjectSchema } from './AuditLogWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereInputObjectSchema).optional()
}).strict();
export const ServerCountOutputTypeCountAuditLogArgsObjectSchema = makeSchema();
export const ServerCountOutputTypeCountAuditLogArgsObjectZodSchema = makeSchema();
