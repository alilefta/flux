import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAuditLogActionFilterObjectSchema as NestedEnumAuditLogActionFilterObjectSchema } from './NestedEnumAuditLogActionFilter.schema'

const nestedenumauditlogactionwithaggregatesfilterSchema = z.object({
  equals: AuditLogActionSchema.optional(),
  in: AuditLogActionSchema.array().optional(),
  notIn: AuditLogActionSchema.array().optional(),
  not: z.union([AuditLogActionSchema, z.lazy(() => NestedEnumAuditLogActionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema).optional()
}).strict();
export const NestedEnumAuditLogActionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumAuditLogActionWithAggregatesFilter> = nestedenumauditlogactionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumAuditLogActionWithAggregatesFilter>;
export const NestedEnumAuditLogActionWithAggregatesFilterObjectZodSchema = nestedenumauditlogactionwithaggregatesfilterSchema;
