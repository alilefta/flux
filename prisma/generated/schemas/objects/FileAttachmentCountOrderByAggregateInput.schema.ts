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
  directMessageId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const FileAttachmentCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCountOrderByAggregateInput>;
export const FileAttachmentCountOrderByAggregateInputObjectZodSchema = makeSchema();
