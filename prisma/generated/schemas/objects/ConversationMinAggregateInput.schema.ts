import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  memberOneId: z.literal(true).optional(),
  memberTwoId: z.literal(true).optional()
}).strict();
export const ConversationMinAggregateInputObjectSchema: z.ZodType<Prisma.ConversationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ConversationMinAggregateInputType>;
export const ConversationMinAggregateInputObjectZodSchema = makeSchema();
