import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clerkId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ProfileMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileMaxOrderByAggregateInput>;
export const ProfileMaxOrderByAggregateInputObjectZodSchema = makeSchema();
