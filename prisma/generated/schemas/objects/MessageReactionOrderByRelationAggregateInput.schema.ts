import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const MessageReactionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.MessageReactionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionOrderByRelationAggregateInput>;
export const MessageReactionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
