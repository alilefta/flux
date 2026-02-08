import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  isDefault: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ChannelOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ChannelOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelOrderByWithRelationInput>;
export const ChannelOrderByWithRelationInputObjectZodSchema = makeSchema();
