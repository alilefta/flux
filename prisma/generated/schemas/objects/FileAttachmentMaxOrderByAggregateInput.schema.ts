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
export const FileAttachmentMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentMaxOrderByAggregateInput>;
export const FileAttachmentMaxOrderByAggregateInputObjectZodSchema = makeSchema();
