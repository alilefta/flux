import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ConversationOrderByWithRelationInputObjectSchema as ConversationOrderByWithRelationInputObjectSchema } from './ConversationOrderByWithRelationInput.schema';
import { FileAttachmentOrderByRelationAggregateInputObjectSchema as FileAttachmentOrderByRelationAggregateInputObjectSchema } from './FileAttachmentOrderByRelationAggregateInput.schema';
import { MessageReactionOrderByRelationAggregateInputObjectSchema as MessageReactionOrderByRelationAggregateInputObjectSchema } from './MessageReactionOrderByRelationAggregateInput.schema';
import { DirectMessageOrderByRelationAggregateInputObjectSchema as DirectMessageOrderByRelationAggregateInputObjectSchema } from './DirectMessageOrderByRelationAggregateInput.schema'

const directmessageorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  conversationId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  pinned: SortOrderSchema.optional(),
  replyToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  member: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
  conversation: z.lazy(() => ConversationOrderByWithRelationInputObjectSchema).optional(),
  attachments: z.lazy(() => FileAttachmentOrderByRelationAggregateInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionOrderByRelationAggregateInputObjectSchema).optional(),
  replyTo: z.lazy(() => DirectMessageOrderByWithRelationInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DirectMessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DirectMessageOrderByWithRelationInput> = directmessageorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.DirectMessageOrderByWithRelationInput>;
export const DirectMessageOrderByWithRelationInputObjectZodSchema = directmessageorderbywithrelationinputSchema;
