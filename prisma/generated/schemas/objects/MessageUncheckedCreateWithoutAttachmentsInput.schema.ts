import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
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
  replyToId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reactions: z.lazy(() => MessageReactionUncheckedCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  replies: z.lazy(() => MessageUncheckedCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const MessageUncheckedCreateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateWithoutAttachmentsInput>;
export const MessageUncheckedCreateWithoutAttachmentsInputObjectZodSchema = makeSchema();
