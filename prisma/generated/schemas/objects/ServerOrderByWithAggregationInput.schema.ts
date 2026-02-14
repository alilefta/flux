import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServerCountOrderByAggregateInputObjectSchema as ServerCountOrderByAggregateInputObjectSchema } from './ServerCountOrderByAggregateInput.schema';
import { ServerAvgOrderByAggregateInputObjectSchema as ServerAvgOrderByAggregateInputObjectSchema } from './ServerAvgOrderByAggregateInput.schema';
import { ServerMaxOrderByAggregateInputObjectSchema as ServerMaxOrderByAggregateInputObjectSchema } from './ServerMaxOrderByAggregateInput.schema';
import { ServerMinOrderByAggregateInputObjectSchema as ServerMinOrderByAggregateInputObjectSchema } from './ServerMinOrderByAggregateInput.schema';
import { ServerSumOrderByAggregateInputObjectSchema as ServerSumOrderByAggregateInputObjectSchema } from './ServerSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  inviteCode: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberCount: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ServerCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ServerAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ServerMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ServerMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ServerSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ServerOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ServerOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerOrderByWithAggregationInput>;
export const ServerOrderByWithAggregationInputObjectZodSchema = makeSchema();
