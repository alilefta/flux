import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DirectMessageCountOrderByAggregateInputObjectSchema as DirectMessageCountOrderByAggregateInputObjectSchema } from './DirectMessageCountOrderByAggregateInput.schema';
import { DirectMessageMaxOrderByAggregateInputObjectSchema as DirectMessageMaxOrderByAggregateInputObjectSchema } from './DirectMessageMaxOrderByAggregateInput.schema';
import { DirectMessageMinOrderByAggregateInputObjectSchema as DirectMessageMinOrderByAggregateInputObjectSchema } from './DirectMessageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  conversationId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  pinned: SortOrderSchema.optional(),
  replyToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DirectMessageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DirectMessageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DirectMessageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DirectMessageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DirectMessageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageOrderByWithAggregationInput>;
export const DirectMessageOrderByWithAggregationInputObjectZodSchema = makeSchema();
