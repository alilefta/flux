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
export const MemberMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MemberMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberMinOrderByAggregateInput>;
export const MemberMinOrderByAggregateInputObjectZodSchema = makeSchema();
