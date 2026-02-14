import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MessageReactionCountOrderByAggregateInputObjectSchema as MessageReactionCountOrderByAggregateInputObjectSchema } from './MessageReactionCountOrderByAggregateInput.schema';
import { MessageReactionMaxOrderByAggregateInputObjectSchema as MessageReactionMaxOrderByAggregateInputObjectSchema } from './MessageReactionMaxOrderByAggregateInput.schema';
import { MessageReactionMinOrderByAggregateInputObjectSchema as MessageReactionMinOrderByAggregateInputObjectSchema } from './MessageReactionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  emoji: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => MessageReactionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MessageReactionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MessageReactionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MessageReactionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MessageReactionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionOrderByWithAggregationInput>;
export const MessageReactionOrderByWithAggregationInputObjectZodSchema = makeSchema();
