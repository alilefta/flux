import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './FileAttachmentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FileAttachmentSelectObjectSchema).optional(),
  include: z.lazy(() => FileAttachmentIncludeObjectSchema).optional()
}).strict();
export const FileAttachmentArgsObjectSchema = makeSchema();
export const FileAttachmentArgsObjectZodSchema = makeSchema();
