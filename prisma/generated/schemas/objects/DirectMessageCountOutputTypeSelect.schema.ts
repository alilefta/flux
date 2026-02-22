import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCountOutputTypeCountAttachmentsArgsObjectSchema as DirectMessageCountOutputTypeCountAttachmentsArgsObjectSchema } from './DirectMessageCountOutputTypeCountAttachmentsArgs.schema';
import { DirectMessageCountOutputTypeCountReactionsArgsObjectSchema as DirectMessageCountOutputTypeCountReactionsArgsObjectSchema } from './DirectMessageCountOutputTypeCountReactionsArgs.schema';
import { DirectMessageCountOutputTypeCountRepliesArgsObjectSchema as DirectMessageCountOutputTypeCountRepliesArgsObjectSchema } from './DirectMessageCountOutputTypeCountRepliesArgs.schema'

const makeSchema = () => z.object({
  attachments: z.union([z.boolean(), z.lazy(() => DirectMessageCountOutputTypeCountAttachmentsArgsObjectSchema)]).optional(),
  reactions: z.union([z.boolean(), z.lazy(() => DirectMessageCountOutputTypeCountReactionsArgsObjectSchema)]).optional(),
  replies: z.union([z.boolean(), z.lazy(() => DirectMessageCountOutputTypeCountRepliesArgsObjectSchema)]).optional()
}).strict();
export const DirectMessageCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DirectMessageCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCountOutputTypeSelect>;
export const DirectMessageCountOutputTypeSelectObjectZodSchema = makeSchema();
