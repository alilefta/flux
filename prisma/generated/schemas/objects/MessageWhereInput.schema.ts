import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { MemberScalarRelationFilterObjectSchema as MemberScalarRelationFilterObjectSchema } from './MemberScalarRelationFilter.schema';
import { MemberWhereInputObjectSchema as MemberWhereInputObjectSchema } from './MemberWhereInput.schema';
import { ChannelScalarRelationFilterObjectSchema as ChannelScalarRelationFilterObjectSchema } from './ChannelScalarRelationFilter.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './ChannelWhereInput.schema';
import { FileAttachmentListRelationFilterObjectSchema as FileAttachmentListRelationFilterObjectSchema } from './FileAttachmentListRelationFilter.schema';
import { MessageReactionListRelationFilterObjectSchema as MessageReactionListRelationFilterObjectSchema } from './MessageReactionListRelationFilter.schema';
import { MessageNullableScalarRelationFilterObjectSchema as MessageNullableScalarRelationFilterObjectSchema } from './MessageNullableScalarRelationFilter.schema';
import { MessageListRelationFilterObjectSchema as MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema'

const messagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MessageWhereInputObjectSchema), z.lazy(() => MessageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MessageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MessageWhereInputObjectSchema), z.lazy(() => MessageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fileUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  channelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  edited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  pinned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  replyToId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  member: z.union([z.lazy(() => MemberScalarRelationFilterObjectSchema), z.lazy(() => MemberWhereInputObjectSchema)]).optional(),
  channel: z.union([z.lazy(() => ChannelScalarRelationFilterObjectSchema), z.lazy(() => ChannelWhereInputObjectSchema)]).optional(),
  attachments: z.lazy(() => FileAttachmentListRelationFilterObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionListRelationFilterObjectSchema).optional(),
  replyTo: z.union([z.lazy(() => MessageNullableScalarRelationFilterObjectSchema), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  replies: z.lazy(() => MessageListRelationFilterObjectSchema).optional()
}).strict();
export const MessageWhereInputObjectSchema: z.ZodType<Prisma.MessageWhereInput> = messagewhereinputSchema as unknown as z.ZodType<Prisma.MessageWhereInput>;
export const MessageWhereInputObjectZodSchema = messagewhereinputSchema;
