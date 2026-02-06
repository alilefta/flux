import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ChannelCountOrderByAggregateInputObjectSchema as ChannelCountOrderByAggregateInputObjectSchema } from './ChannelCountOrderByAggregateInput.schema';
import { ChannelMaxOrderByAggregateInputObjectSchema as ChannelMaxOrderByAggregateInputObjectSchema } from './ChannelMaxOrderByAggregateInput.schema';
import { ChannelMinOrderByAggregateInputObjectSchema as ChannelMinOrderByAggregateInputObjectSchema } from './ChannelMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ChannelCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChannelMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChannelMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChannelOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChannelOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelOrderByWithAggregationInput>;
export const ChannelOrderByWithAggregationInputObjectZodSchema = makeSchema();
