import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  conversationId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DirectMessageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DirectMessageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCountOrderByAggregateInput>;
export const DirectMessageCountOrderByAggregateInputObjectZodSchema = makeSchema();
