import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  emoji: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const MessageReactionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MessageReactionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCountOrderByAggregateInput>;
export const MessageReactionCountOrderByAggregateInputObjectZodSchema = makeSchema();
