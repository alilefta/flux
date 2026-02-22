import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema';
import { DirectMessageArgsObjectSchema as DirectMessageArgsObjectSchema } from './DirectMessageArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  size: z.boolean().optional(),
  messageId: z.boolean().optional(),
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  directMessageId: z.boolean().optional(),
  directMessage: z.union([z.boolean(), z.lazy(() => DirectMessageArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional()
}).strict();
export const FileAttachmentSelectObjectSchema: z.ZodType<Prisma.FileAttachmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentSelect>;
export const FileAttachmentSelectObjectZodSchema = makeSchema();
