import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema as ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema } from './ConversationUpdateOneRequiredWithoutDirectMessagesNestedInput.schema';
import { FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema as FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema } from './FileAttachmentUpdateManyWithoutDirectMessageNestedInput.schema';
import { MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema as MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema } from './MessageReactionUpdateManyWithoutDirectMessageNestedInput.schema';
import { DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema as DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutRepliesNestedInput.schema';
import { DirectMessageUpdateManyWithoutReplyToNestedInputObjectSchema as DirectMessageUpdateManyWithoutReplyToNestedInputObjectSchema } from './DirectMessageUpdateManyWithoutReplyToNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  conversation: z.lazy(() => ConversationUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema).optional(),
  attachments: z.lazy(() => FileAttachmentUpdateManyWithoutDirectMessageNestedInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema).optional(),
  replyTo: z.lazy(() => DirectMessageUpdateOneWithoutRepliesNestedInputObjectSchema).optional(),
  replies: z.lazy(() => DirectMessageUpdateManyWithoutReplyToNestedInputObjectSchema).optional()
}).strict();
export const DirectMessageUpdateWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithoutMemberInput>;
export const DirectMessageUpdateWithoutMemberInputObjectZodSchema = makeSchema();
