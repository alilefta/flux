import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional()
}).strict();
export const ChannelCategorySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategorySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategorySumOrderByAggregateInput>;
export const ChannelCategorySumOrderByAggregateInputObjectZodSchema = makeSchema();
