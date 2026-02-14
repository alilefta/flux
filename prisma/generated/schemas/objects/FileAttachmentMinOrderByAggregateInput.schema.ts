import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const FileAttachmentMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentMinOrderByAggregateInput>;
export const FileAttachmentMinOrderByAggregateInputObjectZodSchema = makeSchema();
