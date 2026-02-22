import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MessageOrderByWithRelationInputObjectSchema as MessageOrderByWithRelationInputObjectSchema } from './MessageOrderByWithRelationInput.schema';
import { DirectMessageOrderByWithRelationInputObjectSchema as DirectMessageOrderByWithRelationInputObjectSchema } from './DirectMessageOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  emoji: SortOrderSchema.optional(),
  messageId: SortOrderSchema.optional(),
  directMessageId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  profileId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  message: z.lazy(() => MessageOrderByWithRelationInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MessageReactionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MessageReactionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionOrderByWithRelationInput>;
export const MessageReactionOrderByWithRelationInputObjectZodSchema = makeSchema();
