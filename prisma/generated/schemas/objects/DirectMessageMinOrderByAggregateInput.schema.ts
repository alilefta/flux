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
export const DirectMessageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DirectMessageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageMinOrderByAggregateInput>;
export const DirectMessageMinOrderByAggregateInputObjectZodSchema = makeSchema();
