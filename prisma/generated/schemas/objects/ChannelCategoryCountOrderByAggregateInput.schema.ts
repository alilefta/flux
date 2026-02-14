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
export const ChannelCategoryCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryCountOrderByAggregateInput>;
export const ChannelCategoryCountOrderByAggregateInputObjectZodSchema = makeSchema();
