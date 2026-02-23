import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateOneWithoutReactionsNestedInputObjectSchema as MessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './MessageUpdateOneWithoutReactionsNestedInput.schema';
import { ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutReactionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.lazy(() => MessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema).optional()
}).strict();
export const MessageReactionUpdateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithoutDirectMessageInput>;
export const MessageReactionUpdateWithoutDirectMessageInputObjectZodSchema = makeSchema();
