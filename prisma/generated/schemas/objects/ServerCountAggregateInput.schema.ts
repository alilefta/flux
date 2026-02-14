import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  imageUrl: z.literal(true).optional(),
  inviteCode: z.literal(true).optional(),
  description: z.literal(true).optional(),
  memberCount: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ServerCountAggregateInputObjectSchema: z.ZodType<Prisma.ServerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ServerCountAggregateInputType>;
export const ServerCountAggregateInputObjectZodSchema = makeSchema();
