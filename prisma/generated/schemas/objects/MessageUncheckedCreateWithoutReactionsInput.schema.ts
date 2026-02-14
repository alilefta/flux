import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema';
import { MessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema as MessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  memberId: z.string(),
  channelId: z.string(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  replyToId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  replies: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const MessageUncheckedCreateWithoutReactionsInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateWithoutReactionsInput>;
export const MessageUncheckedCreateWithoutReactionsInputObjectZodSchema = makeSchema();
