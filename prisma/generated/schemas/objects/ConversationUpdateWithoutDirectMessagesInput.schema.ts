import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOne: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema).optional(),
  memberTwo: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema).optional()
}).strict();
export const ConversationUpdateWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationUpdateWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateWithoutDirectMessagesInput>;
export const ConversationUpdateWithoutDirectMessagesInputObjectZodSchema = makeSchema();
