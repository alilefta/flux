import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NestedEnumAuditLogActionFilterObjectSchema as NestedEnumAuditLogActionFilterObjectSchema } from './NestedEnumAuditLogActionFilter.schema'

const makeSchema = () => z.object({
  equals: AuditLogActionSchema.optional(),
  in: AuditLogActionSchema.array().optional(),
  notIn: AuditLogActionSchema.array().optional(),
  not: z.union([AuditLogActionSchema, z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema)]).optional()
}).strict();
export const EnumAuditLogActionFilterObjectSchema: z.ZodType<Prisma.EnumAuditLogActionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditLogActionFilter>;
export const EnumAuditLogActionFilterObjectZodSchema = makeSchema();
