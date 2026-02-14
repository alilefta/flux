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
export const ServerCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCountOrderByAggregateInput>;
export const ServerCountOrderByAggregateInputObjectZodSchema = makeSchema();
