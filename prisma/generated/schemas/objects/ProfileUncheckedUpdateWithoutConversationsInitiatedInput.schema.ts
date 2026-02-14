import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUncheckedUpdateManyWithoutProfileNestedInputObjectSchema as ServerUncheckedUpdateManyWithoutProfileNestedInputObjectSchema } from './ServerUncheckedUpdateManyWithoutProfileNestedInput.schema';
import { MemberUncheckedUpdateManyWithoutProfileNestedInputObjectSchema as MemberUncheckedUpdateManyWithoutProfileNestedInputObjectSchema } from './MemberUncheckedUpdateManyWithoutProfileNestedInput.schema';
import { ChannelUncheckedUpdateManyWithoutProfileNestedInputObjectSchema as ChannelUncheckedUpdateManyWithoutProfileNestedInputObjectSchema } from './ChannelUncheckedUpdateManyWithoutProfileNestedInput.schema';
import { ConversationUncheckedUpdateManyWithoutMemberTwoNestedInputObjectSchema as ConversationUncheckedUpdateManyWithoutMemberTwoNestedInputObjectSchema } from './ConversationUncheckedUpdateManyWithoutMemberTwoNestedInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutMemberNestedInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutMemberNestedInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutMemberNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  servers: z.lazy(() => ServerUncheckedUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  members: z.lazy(() => MemberUncheckedUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationUncheckedUpdateManyWithoutMemberTwoNestedInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedUpdateManyWithoutMemberNestedInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutConversationsInitiatedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedUpdateWithoutConversationsInitiatedInput>;
export const ProfileUncheckedUpdateWithoutConversationsInitiatedInputObjectZodSchema = makeSchema();
