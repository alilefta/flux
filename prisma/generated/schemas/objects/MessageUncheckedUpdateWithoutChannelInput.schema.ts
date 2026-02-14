import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FileAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema as FileAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema } from './FileAttachmentUncheckedUpdateManyWithoutMessageNestedInput.schema';
import { MessageReactionUncheckedUpdateManyWithoutMessageNestedInputObjectSchema as MessageReactionUncheckedUpdateManyWithoutMessageNestedInputObjectSchema } from './MessageReactionUncheckedUpdateManyWithoutMessageNestedInput.schema';
import { MessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema as MessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema } from './MessageUncheckedUpdateManyWithoutReplyToNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  memberId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  replyToId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attachments: z.lazy(() => FileAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUncheckedUpdateManyWithoutMessageNestedInputObjectSchema).optional(),
  replies: z.lazy(() => MessageUncheckedUpdateManyWithoutReplyToNestedInputObjectSchema).optional()
}).strict();
export const MessageUncheckedUpdateWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedUpdateWithoutChannelInput>;
export const MessageUncheckedUpdateWithoutChannelInputObjectZodSchema = makeSchema();
