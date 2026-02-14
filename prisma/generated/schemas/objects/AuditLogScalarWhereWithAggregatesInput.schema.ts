import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAuditLogActionWithAggregatesFilterObjectSchema as EnumAuditLogActionWithAggregatesFilterObjectSchema } from './EnumAuditLogActionWithAggregatesFilter.schema';
import { AuditLogActionSchema } from '../enums/AuditLogAction.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const auditlogscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AuditLogScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action: z.union([z.lazy(() => EnumAuditLogActionWithAggregatesFilterObjectSchema), AuditLogActionSchema]).optional(),
  serverId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  targetId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AuditLogScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AuditLogScalarWhereWithAggregatesInput> = auditlogscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AuditLogScalarWhereWithAggregatesInput>;
export const AuditLogScalarWhereWithAggregatesInputObjectZodSchema = auditlogscalarwherewithaggregatesinputSchema;
