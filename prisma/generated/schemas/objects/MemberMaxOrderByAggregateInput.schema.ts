import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MemberMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MemberMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberMaxOrderByAggregateInput>;
export const MemberMaxOrderByAggregateInputObjectZodSchema = makeSchema();
