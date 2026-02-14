import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema as ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInput.schema';
import { DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema as DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema } from './DirectMessageUpdateManyWithoutConversationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  memberTwo: z.lazy(() => ProfileUpdateOneRequiredWithoutConversationsReceivedNestedInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageUpdateManyWithoutConversationNestedInputObjectSchema).optional()
}).strict();
export const ConversationUpdateWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUpdateWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateWithoutMemberOneInput>;
export const ConversationUpdateWithoutMemberOneInputObjectZodSchema = makeSchema();
