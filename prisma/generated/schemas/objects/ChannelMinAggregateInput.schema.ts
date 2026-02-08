import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  type: z.literal(true).optional(),
  profileId: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  isDefault: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ChannelMinAggregateInputObjectSchema: z.ZodType<Prisma.ChannelMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelMinAggregateInputType>;
export const ChannelMinAggregateInputObjectZodSchema = makeSchema();
