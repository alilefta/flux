import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCountOutputTypeCountAttachmentsArgsObjectSchema as MessageCountOutputTypeCountAttachmentsArgsObjectSchema } from './MessageCountOutputTypeCountAttachmentsArgs.schema';
import { MessageCountOutputTypeCountReactionsArgsObjectSchema as MessageCountOutputTypeCountReactionsArgsObjectSchema } from './MessageCountOutputTypeCountReactionsArgs.schema';
import { MessageCountOutputTypeCountRepliesArgsObjectSchema as MessageCountOutputTypeCountRepliesArgsObjectSchema } from './MessageCountOutputTypeCountRepliesArgs.schema'

const makeSchema = () => z.object({
  attachments: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeCountAttachmentsArgsObjectSchema)]).optional(),
  reactions: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeCountReactionsArgsObjectSchema)]).optional(),
  replies: z.union([z.boolean(), z.lazy(() => MessageCountOutputTypeCountRepliesArgsObjectSchema)]).optional()
}).strict();
export const MessageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MessageCountOutputTypeSelect>;
export const MessageCountOutputTypeSelectObjectZodSchema = makeSchema();
