import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  memberCount: z.literal(true).optional()
}).strict();
export const ServerSumAggregateInputObjectSchema: z.ZodType<Prisma.ServerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerSumAggregateInputType>;
export const ServerSumAggregateInputObjectZodSchema = makeSchema();
