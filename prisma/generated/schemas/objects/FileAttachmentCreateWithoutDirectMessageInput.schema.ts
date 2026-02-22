import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateNestedOneWithoutAttachmentsInputObjectSchema as MessageCreateNestedOneWithoutAttachmentsInputObjectSchema } from './MessageCreateNestedOneWithoutAttachmentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutAttachmentsInputObjectSchema)
}).strict();
export const FileAttachmentCreateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateWithoutDirectMessageInput>;
export const FileAttachmentCreateWithoutDirectMessageInputObjectZodSchema = makeSchema();
