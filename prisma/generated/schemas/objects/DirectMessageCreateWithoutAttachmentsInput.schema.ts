import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema as ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ProfileCreateNestedOneWithoutDirectMessagesInput.schema';
import { ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema as ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ConversationCreateNestedOneWithoutDirectMessagesInput.schema';
import { MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema as MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateNestedManyWithoutDirectMessageInput.schema';
import { DirectMessageCreateNestedOneWithoutRepliesInputObjectSchema as DirectMessageCreateNestedOneWithoutRepliesInputObjectSchema } from './DirectMessageCreateNestedOneWithoutRepliesInput.schema';
import { DirectMessageCreateNestedManyWithoutReplyToInputObjectSchema as DirectMessageCreateNestedManyWithoutReplyToInputObjectSchema } from './DirectMessageCreateNestedManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  member: z.lazy(() => ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema),
  reactions: z.lazy(() => MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  replyTo: z.lazy(() => DirectMessageCreateNestedOneWithoutRepliesInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const DirectMessageCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateWithoutAttachmentsInput>;
export const DirectMessageCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
