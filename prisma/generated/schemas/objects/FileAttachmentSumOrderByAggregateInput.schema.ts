import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileAttachmentSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentSumOrderByAggregateInput>;
export const FileAttachmentSumOrderByAggregateInputObjectZodSchema = makeSchema();
