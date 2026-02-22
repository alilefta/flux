import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInputObjectSchema as FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInputObjectSchema } from './FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutReplyToNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  memberId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  conversationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  replyToId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema).optional()
}).strict();
export const DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema: z.ZodType<Prisma.DirectMessageUncheckedUpdateWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUncheckedUpdateWithoutReactionsInput>;
export const DirectMessageUncheckedUpdateWithoutReactionsInputObjectZodSchema = makeSchema();
