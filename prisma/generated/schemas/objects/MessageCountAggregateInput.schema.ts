import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  fileUrl: z.literal(true).optional(),
  memberId: z.literal(true).optional(),
  channelId: z.literal(true).optional(),
  deleted: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  edited: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MessageCountAggregateInputObjectSchema: z.ZodType<Prisma.MessageCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MessageCountAggregateInputType>;
export const MessageCountAggregateInputObjectZodSchema = makeSchema();
