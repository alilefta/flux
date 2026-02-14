import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  position: z.literal(true).optional(),
  slowModeRate: z.literal(true).optional()
}).strict();
export const ChannelAvgAggregateInputObjectSchema: z.ZodType<Prisma.ChannelAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelAvgAggregateInputType>;
export const ChannelAvgAggregateInputObjectZodSchema = makeSchema();
