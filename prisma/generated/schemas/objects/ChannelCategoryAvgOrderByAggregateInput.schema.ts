import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const ChannelCategoryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryAvgOrderByAggregateInput>;
export const ChannelCategoryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
