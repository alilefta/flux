import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional()
}).strict();
export const ChannelCategorySumAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategorySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategorySumAggregateInputType>;
export const ChannelCategorySumAggregateInputObjectZodSchema = makeSchema();
