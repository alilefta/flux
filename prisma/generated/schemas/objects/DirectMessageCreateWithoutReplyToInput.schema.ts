import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema as ProfileCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ProfileCreateNestedOneWithoutDirectMessagesInput.schema';
import { ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema as ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema } from './ConversationCreateNestedOneWithoutDirectMessagesInput.schema';
import { FileAttachmentCreateNestedManyWithoutDirectMessageInputObjectSchema as FileAttachmentCreateNestedManyWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateNestedManyWithoutDirectMessageInput.schema';
import { MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema as MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateNestedManyWithoutDirectMessageInput.schema';
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
  attachments: z.lazy(() => FileAttachmentCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const DirectMessageCreateWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateWithoutReplyToInput>;
export const DirectMessageCreateWithoutReplyToInputObjectZodSchema = makeSchema();
