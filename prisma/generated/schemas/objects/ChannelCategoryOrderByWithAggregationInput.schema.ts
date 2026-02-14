import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChannelCategoryCountOrderByAggregateInputObjectSchema as ChannelCategoryCountOrderByAggregateInputObjectSchema } from './ChannelCategoryCountOrderByAggregateInput.schema';
import { ChannelCategoryAvgOrderByAggregateInputObjectSchema as ChannelCategoryAvgOrderByAggregateInputObjectSchema } from './ChannelCategoryAvgOrderByAggregateInput.schema';
import { ChannelCategoryMaxOrderByAggregateInputObjectSchema as ChannelCategoryMaxOrderByAggregateInputObjectSchema } from './ChannelCategoryMaxOrderByAggregateInput.schema';
import { ChannelCategoryMinOrderByAggregateInputObjectSchema as ChannelCategoryMinOrderByAggregateInputObjectSchema } from './ChannelCategoryMinOrderByAggregateInput.schema';
import { ChannelCategorySumOrderByAggregateInputObjectSchema as ChannelCategorySumOrderByAggregateInputObjectSchema } from './ChannelCategorySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ChannelCategoryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ChannelCategoryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChannelCategoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChannelCategoryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ChannelCategorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChannelCategoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChannelCategoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryOrderByWithAggregationInput>;
export const ChannelCategoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
