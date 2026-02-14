import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ChannelCategoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryMinOrderByAggregateInput>;
export const ChannelCategoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
