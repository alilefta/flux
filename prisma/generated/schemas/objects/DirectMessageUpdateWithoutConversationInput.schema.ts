import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutDirectMessagesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  deleted: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  member: z.lazy(() => ProfileUpdateOneRequiredWithoutDirectMessagesNestedInputObjectSchema).optional()
}).strict();
export const DirectMessageUpdateWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithoutConversationInput>;
export const DirectMessageUpdateWithoutConversationInputObjectZodSchema = makeSchema();
