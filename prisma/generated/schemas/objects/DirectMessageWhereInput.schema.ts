import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ConversationScalarRelationFilterObjectSchema as ConversationScalarRelationFilterObjectSchema } from './ConversationScalarRelationFilter.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema';
import { FileAttachmentListRelationFilterObjectSchema as FileAttachmentListRelationFilterObjectSchema } from './FileAttachmentListRelationFilter.schema';
import { MessageReactionListRelationFilterObjectSchema as MessageReactionListRelationFilterObjectSchema } from './MessageReactionListRelationFilter.schema';
import { DirectMessageNullableScalarRelationFilterObjectSchema as DirectMessageNullableScalarRelationFilterObjectSchema } from './DirectMessageNullableScalarRelationFilter.schema';
import { DirectMessageListRelationFilterObjectSchema as DirectMessageListRelationFilterObjectSchema } from './DirectMessageListRelationFilter.schema'

const directmessagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DirectMessageWhereInputObjectSchema), z.lazy(() => DirectMessageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DirectMessageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DirectMessageWhereInputObjectSchema), z.lazy(() => DirectMessageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fileUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  memberId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  conversationId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  deleted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  edited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  pinned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  replyToId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  member: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  conversation: z.union([z.lazy(() => ConversationScalarRelationFilterObjectSchema), z.lazy(() => ConversationWhereInputObjectSchema)]).optional(),
  attachments: z.lazy(() => FileAttachmentListRelationFilterObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionListRelationFilterObjectSchema).optional(),
  replyTo: z.union([z.lazy(() => DirectMessageNullableScalarRelationFilterObjectSchema), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  replies: z.lazy(() => DirectMessageListRelationFilterObjectSchema).optional()
}).strict();
export const DirectMessageWhereInputObjectSchema: z.ZodType<Prisma.DirectMessageWhereInput> = directmessagewhereinputSchema as unknown as z.ZodType<Prisma.DirectMessageWhereInput>;
export const DirectMessageWhereInputObjectZodSchema = directmessagewhereinputSchema;
