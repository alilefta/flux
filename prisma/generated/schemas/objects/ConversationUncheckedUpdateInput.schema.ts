import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutConversationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOneId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberTwoId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema).optional()
}).strict();
export const ConversationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedUpdateInput>;
export const ConversationUncheckedUpdateInputObjectZodSchema = makeSchema();
