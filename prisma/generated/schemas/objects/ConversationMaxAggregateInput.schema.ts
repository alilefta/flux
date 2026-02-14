import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  memberOneId: z.literal(true).optional(),
  memberTwoId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ConversationMaxAggregateInputObjectSchema: z.ZodType<Prisma.ConversationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConversationMaxAggregateInputType>;
export const ConversationMaxAggregateInputObjectZodSchema = makeSchema();
