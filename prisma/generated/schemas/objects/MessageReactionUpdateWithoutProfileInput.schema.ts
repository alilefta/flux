import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateOneWithoutReactionsNestedInputObjectSchema as MessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './MessageUpdateOneWithoutReactionsNestedInput.schema';
import { DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema as DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutReactionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.lazy(() => MessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional()
}).strict();
export const MessageReactionUpdateWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithoutProfileInput>;
export const MessageReactionUpdateWithoutProfileInputObjectZodSchema = makeSchema();
