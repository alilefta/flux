import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerArgsObjectSchema as ServerArgsObjectSchema } from './ServerArgs.schema'

const makeSchema = () => z.object({
  server: z.union([z.boolean(), z.lazy(() => ServerArgsObjectSchema)]).optional()
}).strict();
export const AuditLogIncludeObjectSchema: z.ZodType<Prisma.AuditLogInclude> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogInclude>;
export const AuditLogIncludeObjectZodSchema = makeSchema();
