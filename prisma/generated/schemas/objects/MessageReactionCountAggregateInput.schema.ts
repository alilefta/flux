import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  emoji: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  directMessageId: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MessageReactionCountAggregateInputObjectSchema: z.ZodType<Prisma.MessageReactionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCountAggregateInputType>;
export const MessageReactionCountAggregateInputObjectZodSchema = makeSchema();
