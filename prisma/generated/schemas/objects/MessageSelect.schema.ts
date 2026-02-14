import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberArgsObjectSchema as MemberArgsObjectSchema } from './MemberArgs.schema';
import { ChannelArgsObjectSchema as ChannelArgsObjectSchema } from './ChannelArgs.schema';
import { FileAttachmentFindManySchema as FileAttachmentFindManySchema } from '../findManyFileAttachment.schema';
import { MessageReactionFindManySchema as MessageReactionFindManySchema } from '../findManyMessageReaction.schema';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema';
import { MessageFindManySchema as MessageFindManySchema } from '../findManyMessage.schema';
import { MessageCountOutputTypeArgsObjectSchema as MessageCountOutputTypeArgsObjectSchema } from './MessageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  fileUrl: z.boolean().optional(),
  memberId: z.boolean().optional(),
  member: z.union([z.boolean(), z.lazy(() => MemberArgsObjectSchema)]).optional(),
  channelId: z.boolean().optional(),
  channel: z.union([z.boolean(), z.lazy(() => ChannelArgsObjectSchema)]).optional(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  attachments: z.union([z.boolean(), z.lazy(() => FileAttachmentFindManySchema)]).optional(),
  reactions: z.union([z.boolean(), z.lazy(() => MessageReactionFindManySchema)]).optional(),
  replyToId: z.boolean().optional(),
  replyTo: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  replies: z.union([z.boolean(), z.lazy(() => MessageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const MessageSelectObjectSchema: z.ZodType<Prisma.MessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageSelect>;
export const MessageSelectObjectZodSchema = makeSchema();
