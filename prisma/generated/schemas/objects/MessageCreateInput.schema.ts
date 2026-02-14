import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateNestedOneWithoutMessagesInputObjectSchema as MemberCreateNestedOneWithoutMessagesInputObjectSchema } from './MemberCreateNestedOneWithoutMessagesInput.schema';
import { ChannelCreateNestedOneWithoutMessagesInputObjectSchema as ChannelCreateNestedOneWithoutMessagesInputObjectSchema } from './ChannelCreateNestedOneWithoutMessagesInput.schema';
import { FileAttachmentCreateNestedManyWithoutMessageInputObjectSchema as FileAttachmentCreateNestedManyWithoutMessageInputObjectSchema } from './FileAttachmentCreateNestedManyWithoutMessageInput.schema';
import { MessageReactionCreateNestedManyWithoutMessageInputObjectSchema as MessageReactionCreateNestedManyWithoutMessageInputObjectSchema } from './MessageReactionCreateNestedManyWithoutMessageInput.schema';
import { MessageCreateNestedOneWithoutRepliesInputObjectSchema as MessageCreateNestedOneWithoutRepliesInputObjectSchema } from './MessageCreateNestedOneWithoutRepliesInput.schema';
import { MessageCreateNestedManyWithoutReplyToInputObjectSchema as MessageCreateNestedManyWithoutReplyToInputObjectSchema } from './MessageCreateNestedManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  fileUrl: z.string().optional().nullable(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  member: z.lazy(() => MemberCreateNestedOneWithoutMessagesInputObjectSchema),
  channel: z.lazy(() => ChannelCreateNestedOneWithoutMessagesInputObjectSchema),
  attachments: z.lazy(() => FileAttachmentCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionCreateNestedManyWithoutMessageInputObjectSchema).optional(),
  replyTo: z.lazy(() => MessageCreateNestedOneWithoutRepliesInputObjectSchema).optional(),
  replies: z.lazy(() => MessageCreateNestedManyWithoutReplyToInputObjectSchema).optional()
}).strict();
export const MessageCreateInputObjectSchema: z.ZodType<Prisma.MessageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateInput>;
export const MessageCreateInputObjectZodSchema = makeSchema();
