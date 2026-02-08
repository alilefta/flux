import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MemberOrderByWithRelationInputObjectSchema as MemberOrderByWithRelationInputObjectSchema } from './MemberOrderByWithRelationInput.schema';
import { ChannelOrderByWithRelationInputObjectSchema as ChannelOrderByWithRelationInputObjectSchema } from './ChannelOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  channelId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputObjectSchema).optional(),
  channel: z.lazy(() => ChannelOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageOrderByWithRelationInput>;
export const MessageOrderByWithRelationInputObjectZodSchema = makeSchema();
