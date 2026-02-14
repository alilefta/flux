import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogCreateManyServerInputObjectSchema as AuditLogCreateManyServerInputObjectSchema } from './AuditLogCreateManyServerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuditLogCreateManyServerInputObjectSchema), z.lazy(() => AuditLogCreateManyServerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuditLogCreateManyServerInputEnvelopeObjectSchema: z.ZodType<Prisma.AuditLogCreateManyServerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCreateManyServerInputEnvelope>;
export const AuditLogCreateManyServerInputEnvelopeObjectZodSchema = makeSchema();
