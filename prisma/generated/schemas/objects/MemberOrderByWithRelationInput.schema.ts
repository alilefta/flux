import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './ServerOrderByWithRelationInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  serverId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  server: z.lazy(() => ServerOrderByWithRelationInputObjectSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MemberOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MemberOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberOrderByWithRelationInput>;
export const MemberOrderByWithRelationInputObjectZodSchema = makeSchema();
