import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  memberCount: SortOrderSchema.optional()
}).strict();
export const ServerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerAvgOrderByAggregateInput>;
export const ServerAvgOrderByAggregateInputObjectZodSchema = makeSchema();
