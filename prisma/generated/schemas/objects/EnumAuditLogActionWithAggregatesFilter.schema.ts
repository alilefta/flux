import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { NestedEnumAuditLogActionWithAggregatesFilterObjectSchema as NestedEnumAuditLogActionWithAggregatesFilterObjectSchema } from './NestedEnumAuditLogActionWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumAuditLogActionFilterObjectSchema as NestedEnumAuditLogActionFilterObjectSchema } from './NestedEnumAuditLogActionFilter.schema'

const makeSchema = () => z.object({
  equals: AuditLogActionSchema.optional(),
  in: AuditLogActionSchema.array().optional(),
  notIn: AuditLogActionSchema.array().optional(),
  not: z.union([AuditLogActionSchema, z.lazy(() => NestedEnumAuditLogActionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditLogActionFilterObjectSchema).optional()
}).strict();
export const EnumAuditLogActionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAuditLogActionWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAuditLogActionWithAggregatesFilter>;
export const EnumAuditLogActionWithAggregatesFilterObjectZodSchema = makeSchema();
