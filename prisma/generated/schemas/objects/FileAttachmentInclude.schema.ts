import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageArgsObjectSchema as MessageArgsObjectSchema } from './MessageArgs.schema'

const makeSchema = () => z.object({
  message: z.union([z.boolean(), z.lazy(() => MessageArgsObjectSchema)]).optional()
}).strict();
export const FileAttachmentIncludeObjectSchema: z.ZodType<Prisma.FileAttachmentInclude> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentInclude>;
export const FileAttachmentIncludeObjectZodSchema = makeSchema();
