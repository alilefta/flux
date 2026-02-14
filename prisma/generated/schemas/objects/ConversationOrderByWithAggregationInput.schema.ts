import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ConversationCountOrderByAggregateInputObjectSchema as ConversationCountOrderByAggregateInputObjectSchema } from './ConversationCountOrderByAggregateInput.schema';
import { ConversationMaxOrderByAggregateInputObjectSchema as ConversationMaxOrderByAggregateInputObjectSchema } from './ConversationMaxOrderByAggregateInput.schema';
import { ConversationMinOrderByAggregateInputObjectSchema as ConversationMinOrderByAggregateInputObjectSchema } from './ConversationMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  memberOneId: SortOrderSchema.optional(),
  memberTwoId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ConversationCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ConversationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ConversationMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ConversationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ConversationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationOrderByWithAggregationInput>;
export const ConversationOrderByWithAggregationInputObjectZodSchema = makeSchema();
