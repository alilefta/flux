import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  fileUrl: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  channelId: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  edited: z.literal(true).optional(),
  pinned: z.literal(true).optional(),
  replyToId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const MessageMaxAggregateInputObjectSchema: z.ZodType<Prisma.MessageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageMaxAggregateInputType>;
export const MessageMaxAggregateInputObjectZodSchema = makeSchema();
