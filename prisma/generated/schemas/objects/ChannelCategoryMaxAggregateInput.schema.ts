import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  position: z.literal(true).optional(),
  serverId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ChannelCategoryMaxAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCategoryMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryMaxAggregateInputType>;
export const ChannelCategoryMaxAggregateInputObjectZodSchema = makeSchema();
