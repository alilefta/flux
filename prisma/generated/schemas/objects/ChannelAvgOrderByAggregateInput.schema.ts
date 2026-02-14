import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  position: SortOrderSchema.optional(),
  slowModeRate: SortOrderSchema.optional()
}).strict();
export const ChannelAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelAvgOrderByAggregateInput>;
export const ChannelAvgOrderByAggregateInputObjectZodSchema = makeSchema();
