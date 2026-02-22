import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema as MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema } from './MessageUpdateOneRequiredWithoutReactionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  profileId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.lazy(() => MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema).optional()
}).strict();
export const MessageReactionUpdateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithoutDirectMessageInput>;
export const MessageReactionUpdateWithoutDirectMessageInputObjectZodSchema = makeSchema();
