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
  member: z.union([z.boolean(), z.lazy(() => ProfileArgsObjectSchema)]).optional(),
  conversation: z.union([z.boolean(), z.lazy(() => ConversationArgsObjectSchema)]).optional(),
  attachments: z.union([z.boolean(), z.lazy(() => FileAttachmentFindManySchema)]).optional(),
  reactions: z.union([z.boolean(), z.lazy(() => MessageReactionFindManySchema)]).optional(),
  replyTo: z.union([z.boolean(), z.lazy(() => DirectMessageArgsObjectSchema)]).optional(),
  replies: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DirectMessageCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DirectMessageIncludeObjectSchema: z.ZodType<Prisma.DirectMessageInclude> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageInclude>;
export const DirectMessageIncludeObjectZodSchema = makeSchema();
