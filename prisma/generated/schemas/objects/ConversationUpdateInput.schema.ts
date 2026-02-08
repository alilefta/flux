import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInput.schema';
import { DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema as DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema } from './DirectMessageUpdateManyWithoutConversationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberOne: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsInitiatedNestedInputObjectSchema).optional(),
  memberTwo: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema).optional()
}).strict();
export const ConversationUpdateInputObjectSchema: z.ZodType<Prisma.ConversationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateInput>;
export const ConversationUpdateInputObjectZodSchema = makeSchema();
