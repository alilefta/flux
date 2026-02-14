import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FileAttachmentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FileAttachmentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentOrderByRelationAggregateInput>;
export const FileAttachmentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
