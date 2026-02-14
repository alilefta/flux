import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  emoji: z.literal(true).optional(),
  messageId: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const MessageReactionMinAggregateInputObjectSchema: z.ZodType<Prisma.MessageReactionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionMinAggregateInputType>;
export const MessageReactionMinAggregateInputObjectZodSchema = makeSchema();
