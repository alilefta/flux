import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  memberId: z.string(),
  conversationId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  replyToId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema).optional()
}).strict();
export const DirectMessageUncheckedCreateWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUncheckedCreateWithoutRepliesInput>;
export const DirectMessageUncheckedCreateWithoutRepliesInputObjectZodSchema = makeSchema();
