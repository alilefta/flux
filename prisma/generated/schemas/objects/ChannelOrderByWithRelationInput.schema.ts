import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { ChannelCategoryOrderByWithRelationInputObjectSchema as ChannelCategoryOrderByWithRelationInputObjectSchema } from './ChannelCategoryOrderByWithRelationInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  topic: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  position: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isDefault: SortOrderSchema.optional(),
  isLocked: SortOrderSchema.optional(),
  slowModeRate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
  category: z.lazy(() => ChannelCategoryOrderByWithRelationInputObjectSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ChannelOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelOrderByWithRelationInput>;
export const ChannelOrderByWithRelationInputObjectZodSchema = makeSchema();
