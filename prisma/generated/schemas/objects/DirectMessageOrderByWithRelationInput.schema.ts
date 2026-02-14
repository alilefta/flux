import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ConversationOrderByWithRelationInputObjectSchema as ConversationOrderByWithRelationInputObjectSchema } from './ConversationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  conversationId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  member: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  conversation: z.lazy(() => ConversationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DirectMessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DirectMessageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageOrderByWithRelationInput>;
export const DirectMessageOrderByWithRelationInputObjectZodSchema = makeSchema();
