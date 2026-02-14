import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ChannelCategoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryOrderByRelationAggregateInput>;
export const ChannelCategoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
