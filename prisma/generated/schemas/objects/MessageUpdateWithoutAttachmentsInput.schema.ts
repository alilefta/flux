import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './MemberUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './ChannelUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { MessageReactionUpdateManyWithoutMessageNestedInputObjectSchema as MessageReactionUpdateManyWithoutMessageNestedInputObjectSchema } from './MessageReactionUpdateManyWithoutMessageNestedInput.schema';
import { MessageUpdateOneWithoutRepliesNestedInputObjectSchema as MessageUpdateOneWithoutRepliesNestedInputObjectSchema } from './MessageUpdateOneWithoutRepliesNestedInput.schema';
import { MessageUpdateManyWithoutReplyToNestedInputObjectSchema as MessageUpdateManyWithoutReplyToNestedInputObjectSchema } from './MessageUpdateManyWithoutReplyToNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(),
  channel: z.lazy(() => ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(),
  reactions: z.lazy(() => MessageReactionUpdateManyWithoutMessageNestedInputObjectSchema).optional(),
  replyTo: z.lazy(() => MessageUpdateOneWithoutRepliesNestedInputObjectSchema).optional(),
  replies: z.lazy(() => MessageUpdateManyWithoutReplyToNestedInputObjectSchema).optional()
}).strict();
export const MessageUpdateWithoutAttachmentsInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithoutAttachmentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithoutAttachmentsInput>;
export const MessageUpdateWithoutAttachmentsInputObjectZodSchema = makeSchema();
