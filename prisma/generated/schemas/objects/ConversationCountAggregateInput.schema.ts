import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  memberOneId: z.literal(true).optional(),
  memberTwoId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ConversationCountAggregateInputObjectSchema: z.ZodType<Prisma.ConversationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCountAggregateInputType>;
export const ConversationCountAggregateInputObjectZodSchema = makeSchema();
