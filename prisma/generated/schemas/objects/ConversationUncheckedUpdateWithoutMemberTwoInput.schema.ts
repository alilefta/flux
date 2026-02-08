import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutConversationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOneId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema).optional()
}).strict();
export const ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedUpdateWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedUpdateWithoutMemberTwoInput>;
export const ConversationUncheckedUpdateWithoutMemberTwoInputObjectZodSchema = makeSchema();
