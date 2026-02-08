import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  inviteCode: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  memberCount: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ServerMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerMinOrderByAggregateInput>;
export const ServerMinOrderByAggregateInputObjectZodSchema = makeSchema();
