import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateNestedManyWithoutMessageInput.schema';
import { MessageReactionUncheckedCreateNestedManyWithoutMessageInputObjectSchema as MessageReactionUncheckedCreateNestedManyWithoutMessageInputObjectSchema } from './MessageReactionUncheckedCreateNestedManyWithoutMessageInput.schema';
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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  replies: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const MessageUncheckedCreateWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateWithoutReplyToInput>;
export const MessageUncheckedCreateWithoutReplyToInputObjectZodSchema = makeSchema();
