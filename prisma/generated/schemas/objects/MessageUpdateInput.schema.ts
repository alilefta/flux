import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './MemberUpdateOneRequiredWithoutMessagesNestedInput.schema';
import { ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema as ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema } from './ChannelUpdateOneRequiredWithoutMessagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  edited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  member: z.lazy(() => MemberUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional(),
  channel: z.lazy(() => ChannelUpdateOneRequiredWithoutMessagesNestedInputObjectSchema).optional()
}).strict();
export const MessageUpdateInputObjectSchema: z.ZodType<Prisma.MessageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateInput>;
export const MessageUpdateInputObjectZodSchema = makeSchema();
