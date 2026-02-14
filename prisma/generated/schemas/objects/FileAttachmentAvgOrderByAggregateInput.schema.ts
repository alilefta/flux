import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  size: SortOrderSchema.optional()
}).strict();
export const FileAttachmentAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentAvgOrderByAggregateInput>;
export const FileAttachmentAvgOrderByAggregateInputObjectZodSchema = makeSchema();
