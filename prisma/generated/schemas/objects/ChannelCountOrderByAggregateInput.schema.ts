import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ChannelCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCountOrderByAggregateInput>;
export const ChannelCountOrderByAggregateInputObjectZodSchema = makeSchema();
