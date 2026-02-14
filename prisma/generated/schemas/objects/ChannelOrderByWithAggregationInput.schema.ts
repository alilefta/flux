import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChannelCountOrderByAggregateInputObjectSchema as ChannelCountOrderByAggregateInputObjectSchema } from './ChannelCountOrderByAggregateInput.schema';
import { ChannelAvgOrderByAggregateInputObjectSchema as ChannelAvgOrderByAggregateInputObjectSchema } from './ChannelAvgOrderByAggregateInput.schema';
import { ChannelMaxOrderByAggregateInputObjectSchema as ChannelMaxOrderByAggregateInputObjectSchema } from './ChannelMaxOrderByAggregateInput.schema';
import { ChannelMinOrderByAggregateInputObjectSchema as ChannelMinOrderByAggregateInputObjectSchema } from './ChannelMinOrderByAggregateInput.schema';
import { ChannelSumOrderByAggregateInputObjectSchema as ChannelSumOrderByAggregateInputObjectSchema } from './ChannelSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  topic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDefault: SortOrderSchema.optional(),
  isLocked: SortOrderSchema.optional(),
  slowModeRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ChannelCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ChannelAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChannelMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChannelMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ChannelSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChannelOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChannelOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelOrderByWithAggregationInput>;
export const ChannelOrderByWithAggregationInputObjectZodSchema = makeSchema();
