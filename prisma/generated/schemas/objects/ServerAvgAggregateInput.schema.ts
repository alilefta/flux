import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  memberCount: z.literal(true).optional()
}).strict();
export const ServerAvgAggregateInputObjectSchema: z.ZodType<Prisma.ServerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerAvgAggregateInputType>;
export const ServerAvgAggregateInputObjectZodSchema = makeSchema();
