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
export const ChannelMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChannelMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelMinOrderByAggregateInput>;
export const ChannelMinOrderByAggregateInputObjectZodSchema = makeSchema();
