import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MemberOrderByWithRelationInputObjectSchema as MemberOrderByWithRelationInputObjectSchema } from './MemberOrderByWithRelationInput.schema';
import { ChannelOrderByWithRelationInputObjectSchema as ChannelOrderByWithRelationInputObjectSchema } from './ChannelOrderByWithRelationInput.schema';
import { FileAttachmentOrderByRelationAggregateInputObjectSchema as FileAttachmentOrderByRelationAggregateInputObjectSchema } from './FileAttachmentOrderByRelationAggregateInput.schema';
import { MessageReactionOrderByRelationAggregateInputObjectSchema as MessageReactionOrderByRelationAggregateInputObjectSchema } from './MessageReactionOrderByRelationAggregateInput.schema';
import { MessageOrderByRelationAggregateInputObjectSchema as MessageOrderByRelationAggregateInputObjectSchema } from './MessageOrderByRelationAggregateInput.schema'

const messageorderbywithrelationinputSchema = z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  fileUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  memberId: SortOrderSchema.optional(),
  channelId: SortOrderSchema.optional(),
  deleted: SortOrderSchema.optional(),
  edited: SortOrderSchema.optional(),
  pinned: SortOrderSchema.optional(),
  replyToId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  member: z.lazy(() => MemberOrderByWithRelationInputObjectSchema).optional(),
  channel: z.lazy(() => ChannelOrderByWithRelationInputObjectSchema).optional(),
  attachments: z.lazy(() => FileAttachmentOrderByRelationAggregateInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionOrderByRelationAggregateInputObjectSchema).optional(),
  replyTo: z.lazy(() => MessageOrderByWithRelationInputObjectSchema).optional(),
  replies: z.lazy(() => MessageOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const MessageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = messageorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.MessageOrderByWithRelationInput>;
export const MessageOrderByWithRelationInputObjectZodSchema = messageorderbywithrelationinputSchema;
