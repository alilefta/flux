import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { MemberOrderByRelationAggregateInputObjectSchema as MemberOrderByRelationAggregateInputObjectSchema } from './MemberOrderByRelationAggregateInput.schema';
import { ChannelOrderByRelationAggregateInputObjectSchema as ChannelOrderByRelationAggregateInputObjectSchema } from './ChannelOrderByRelationAggregateInput.schema';
import { ChannelCategoryOrderByRelationAggregateInputObjectSchema as ChannelCategoryOrderByRelationAggregateInputObjectSchema } from './ChannelCategoryOrderByRelationAggregateInput.schema';
import { AuditLogOrderByRelationAggregateInputObjectSchema as AuditLogOrderByRelationAggregateInputObjectSchema } from './AuditLogOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  imageUrl: SortOrderSchema.optional(),
  inviteCode: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberCount: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  members: z.lazy(() => MemberOrderByRelationAggregateInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelOrderByRelationAggregateInputObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryOrderByRelationAggregateInputObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ServerOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ServerOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerOrderByWithRelationInput>;
export const ServerOrderByWithRelationInputObjectZodSchema = makeSchema();
