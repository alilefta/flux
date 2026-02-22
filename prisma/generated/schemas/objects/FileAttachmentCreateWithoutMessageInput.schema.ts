import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateNestedOneWithoutAttachmentsInputObjectSchema as DirectMessageCreateNestedOneWithoutAttachmentsInputObjectSchema } from './DirectMessageCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  directMessage: z.lazy(() => DirectMessageCreateNestedOneWithoutAttachmentsInputObjectSchema).optional()
}).strict();
export const FileAttachmentCreateWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateWithoutMessageInput>;
export const FileAttachmentCreateWithoutMessageInputObjectZodSchema = makeSchema();
