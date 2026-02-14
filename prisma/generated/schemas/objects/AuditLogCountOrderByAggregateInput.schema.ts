import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  targetId: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AuditLogCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AuditLogCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogCountOrderByAggregateInput>;
export const AuditLogCountOrderByAggregateInputObjectZodSchema = makeSchema();
