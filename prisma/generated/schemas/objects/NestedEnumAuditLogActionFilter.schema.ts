import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema'

const nestedenumauditlogactionfilterSchema = z.object({
  equals: AuditLogActionSchema.optional(),
  in: AuditLogActionSchema.array().optional(),
  notIn: AuditLogActionSchema.array().optional(),
  not: z.union([AuditLogActionSchema, z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumAuditLogActionFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditLogActionFilter> = nestedenumauditlogactionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditLogActionFilter>;
export const NestedEnumAuditLogActionFilterObjectZodSchema = nestedenumauditlogactionfilterSchema;
