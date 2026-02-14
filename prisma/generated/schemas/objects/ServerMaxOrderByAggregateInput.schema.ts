import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  inviteCode: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  memberCount: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ServerMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerMaxOrderByAggregateInput>;
export const ServerMaxOrderByAggregateInputObjectZodSchema = makeSchema();
