import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileAttachmentCountOrderByAggregateInputObjectSchema as FileAttachmentCountOrderByAggregateInputObjectSchema } from './FileAttachmentCountOrderByAggregateInput.schema';
import { FileAttachmentAvgOrderByAggregateInputObjectSchema as FileAttachmentAvgOrderByAggregateInputObjectSchema } from './FileAttachmentAvgOrderByAggregateInput.schema';
import { FileAttachmentMaxOrderByAggregateInputObjectSchema as FileAttachmentMaxOrderByAggregateInputObjectSchema } from './FileAttachmentMaxOrderByAggregateInput.schema';
import { FileAttachmentMinOrderByAggregateInputObjectSchema as FileAttachmentMinOrderByAggregateInputObjectSchema } from './FileAttachmentMinOrderByAggregateInput.schema';
import { FileAttachmentSumOrderByAggregateInputObjectSchema as FileAttachmentSumOrderByAggregateInputObjectSchema } from './FileAttachmentSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  messageId: SortOrderSchema.optional(),
  directMessageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FileAttachmentCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileAttachmentAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileAttachmentMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileAttachmentMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileAttachmentSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FileAttachmentOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FileAttachmentOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentOrderByWithAggregationInput>;
export const FileAttachmentOrderByWithAggregationInputObjectZodSchema = makeSchema();
