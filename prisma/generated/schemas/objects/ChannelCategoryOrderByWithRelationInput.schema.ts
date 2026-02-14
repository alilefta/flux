import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { ChannelOrderByRelationAggregateInputObjectSchema as ChannelOrderByRelationAggregateInputObjectSchema } from './ChannelOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ChannelCategoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChannelCategoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryOrderByWithRelationInput>;
export const ChannelCategoryOrderByWithRelationInputObjectZodSchema = makeSchema();
