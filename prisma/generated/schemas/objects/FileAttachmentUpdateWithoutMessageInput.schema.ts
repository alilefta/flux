import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DirectMessageUpdateOneWithoutAttachmentsNestedInputObjectSchema as DirectMessageUpdateOneWithoutAttachmentsNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutAttachmentsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  size: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  directMessage: z.lazy(() => DirectMessageUpdateOneWithoutAttachmentsNestedInputObjectSchema).optional()
}).strict();
export const FileAttachmentUpdateWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpdateWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpdateWithoutMessageInput>;
export const FileAttachmentUpdateWithoutMessageInputObjectZodSchema = makeSchema();
