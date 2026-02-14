import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  topic: z.literal(true).optional(),
  position: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  isLocked: z.literal(true).optional(),
  slowModeRate: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ChannelCountAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCountAggregateInputType>;
export const ChannelCountAggregateInputObjectZodSchema = makeSchema();
