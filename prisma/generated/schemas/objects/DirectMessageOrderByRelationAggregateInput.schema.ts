import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const DirectMessageOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.DirectMessageOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageOrderByRelationAggregateInput>;
export const DirectMessageOrderByRelationAggregateInputObjectZodSchema = makeSchema();
