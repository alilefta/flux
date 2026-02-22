import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileArgsObjectSchema as ProfileArgsObjectSchema } from './ProfileArgs.schema';
import { ConversationArgsObjectSchema as ConversationArgsObjectSchema } from './ConversationArgs.schema';
import { FileAttachmentFindManySchema as FileAttachmentFindManySchema } from '../findManyFileAttachment.schema';
import { MessageReactionFindManySchema as MessageReactionFindManySchema } from '../findManyMessageReaction.schema';
import { DirectMessageArgsObjectSchema as DirectMessageArgsObjectSchema } from './DirectMessageArgs.schema';
import { DirectMessageFindManySchema as DirectMessageFindManySchema } from '../findManyDirectMessage.schema';
import { DirectMessageCountOutputTypeArgsObjectSchema as DirectMessageCountOutputTypeArgsObjectSchema } from './DirectMessageCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  fileUrl: z.boolean().optional(),
  memberId: z.boolean().optional(),
  member: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  conversationId: z.boolean().optional(),
  conversation: z.union([z.boolean(), z.lazy(() => ConversationArgsObjectSchema)]).optional(),
  deleted: z.boolean().optional(),
  edited: z.boolean().optional(),
  pinned: z.boolean().optional(),
  attachments: z.union([z.boolean(), z.lazy(() => FileAttachmentFindManySchema)]).optional(),
  reactions: z.union([z.boolean(), z.lazy(() => MessageReactionFindManySchema)]).optional(),
  replyToId: z.boolean().optional(),
  replyTo: z.union([z.boolean(), z.lazy(() => DirectMessageArgsObjectSchema)]).optional(),
  replies: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => DirectMessageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DirectMessageSelectObjectSchema: z.ZodType<Prisma.DirectMessageSelect> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageSelect>;
export const DirectMessageSelectObjectZodSchema = makeSchema();
