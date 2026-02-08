import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ConversationOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ConversationOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationOrderByRelationAggregateInput>;
export const ConversationOrderByRelationAggregateInputObjectZodSchema = makeSchema();
