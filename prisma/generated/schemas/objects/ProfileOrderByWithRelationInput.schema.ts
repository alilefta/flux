import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ServerOrderByRelationAggregateInputObjectSchema as ServerOrderByRelationAggregateInputObjectSchema } from './ServerOrderByRelationAggregateInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema as MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';
import { ChannelOrderByRelationAggregateInputObjectSchema as ChannelOrderByRelationAggregateInputObjectSchema } from './ChannelOrderByRelationAggregateInput.schema';
import { ConversationOrderByRelationAggregateInputObjectSchema as ConversationOrderByRelationAggregateInputObjectSchema } from './ConversationOrderByRelationAggregateInput.schema';
import { DirectMessageOrderByRelationAggregateInputObjectSchema as DirectMessageOrderByRelationAggregateInputObjectSchema } from './DirectMessageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clerkId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  bio: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  servers: z.lazy(() => ServerOrderByRelationAggregateInputObjectSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationOrderByRelationAggregateInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationOrderByRelationAggregateInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ProfileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileOrderByWithRelationInput>;
export const ProfileOrderByWithRelationInputObjectZodSchema = makeSchema();
