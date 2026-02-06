import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ChannelOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ChannelOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelOrderByRelationAggregateInput>;
export const ChannelOrderByRelationAggregateInputObjectZodSchema = makeSchema();
