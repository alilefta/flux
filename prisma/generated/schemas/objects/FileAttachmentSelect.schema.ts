import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  url: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  size: z.boolean().optional(),
  messageId: z.boolean().optional(),
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional()
}).strict();
export const FileAttachmentSelectObjectSchema: z.ZodType<Prisma.FileAttachmentSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentSelect>;
export const FileAttachmentSelectObjectZodSchema = makeSchema();
