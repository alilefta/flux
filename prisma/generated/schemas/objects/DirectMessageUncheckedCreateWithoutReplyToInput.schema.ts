import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInput.schema';
import { DirectMessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema as DirectMessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedCreateNestedManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  memberId: z.string(),
  conversationId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutReplyToInput>;
export const DirectMessageUncheckedCreateWithoutReplyToInputObjectZodSchema = makeSchema();
