import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema as MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema } from './MessageUpdateOneRequiredWithoutReactionsNestedInput.schema';
import { DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema as DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutReactionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  profileId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.lazy(() => MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional()
}).strict();
export const MessageReactionUpdateInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateInput>;
export const MessageReactionUpdateInputObjectZodSchema = makeSchema();
