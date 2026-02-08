import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInput.schema';
import { DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema as DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema } from './DirectMessageUpdateManyWithoutConversationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOne: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema).optional()
}).strict();
export const ConversationUpdateWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUpdateWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateWithoutMemberTwoInput>;
export const ConversationUpdateWithoutMemberTwoInputObjectZodSchema = makeSchema();
