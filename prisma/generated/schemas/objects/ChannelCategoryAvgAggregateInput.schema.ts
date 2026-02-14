import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const ChannelCategoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryAvgAggregateInputType>;
export const ChannelCategoryAvgAggregateInputObjectZodSchema = makeSchema();
