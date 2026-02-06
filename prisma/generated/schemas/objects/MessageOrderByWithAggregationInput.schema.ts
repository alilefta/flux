import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MessageCountOrderByAggregateInputObjectSchema as MessageCountOrderByAggregateInputObjectSchema } from './MessageCountOrderByAggregateInput.schema';
import { MessageMaxOrderByAggregateInputObjectSchema as MessageMaxOrderByAggregateInputObjectSchema } from './MessageMaxOrderByAggregateInput.schema';
import { MessageMinOrderByAggregateInputObjectSchema as MessageMinOrderByAggregateInputObjectSchema } from './MessageMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  channelId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MessageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageOrderByWithAggregationInput>;
export const MessageOrderByWithAggregationInputObjectZodSchema = makeSchema();
