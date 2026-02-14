import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: SortOrderSchema.optional(),
  memberId: SortOrderSchema.optional(),
  channelId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  pinned: SortOrderSchema.optional(),
  replyToId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const MessageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MessageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageMinOrderByAggregateInput>;
export const MessageMinOrderByAggregateInputObjectZodSchema = makeSchema();
