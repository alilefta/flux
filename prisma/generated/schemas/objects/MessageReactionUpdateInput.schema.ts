import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { MessageUpdateOneWithoutReactionsNestedInputObjectSchema as MessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './MessageUpdateOneWithoutReactionsNestedInput.schema';
import { DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema as DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema } from './DirectMessageUpdateOneWithoutReactionsNestedInput.schema';
import { ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutReactionsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.lazy(() => MessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutReactionsNestedInputObjectSchema).optional()
}).strict();
export const MessageReactionUpdateInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateInput>;
export const MessageReactionUpdateInputObjectZodSchema = makeSchema();
