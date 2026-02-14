import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  memberOneId: SortOrderSchema.optional(),
  memberTwoId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ConversationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConversationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationMinOrderByAggregateInput>;
export const ConversationMinOrderByAggregateInputObjectZodSchema = makeSchema();
