import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  memberOneId: SortOrderSchema.optional(),
  memberTwoId: SortOrderSchema.optional()
}).strict();
export const ConversationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConversationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationMaxOrderByAggregateInput>;
export const ConversationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
