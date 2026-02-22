import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutDirectMessagesNestedInput.schema';
import { ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema as ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema } from './ConversationUpdateOneRequiredWithoutDirectMessagesNestedInput.schema';
import { FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema as FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema } from './FileAttachmentUpdateManyWithoutDirectMessageNestedInput.schema';
import { MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema as MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema } from './MessageReactionUpdateManyWithoutDirectMessageNestedInput.schema';
import { DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema as DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutRepliesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  member: z.lazy(() => ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema).optional(),
  conversation: z.lazy(() => ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema).optional(),
  replyTo: z.lazy(() => DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema).optional()
}).strict();
export const DirectMessageUpdateWithoutRepliesInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithoutRepliesInput>;
export const DirectMessageUpdateWithoutRepliesInputObjectZodSchema = makeSchema();
