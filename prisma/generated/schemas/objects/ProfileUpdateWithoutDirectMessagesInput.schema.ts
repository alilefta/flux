import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ServerUpdateManyWithoutProfileNestedInputObjectSchema as ServerUpdateManyWithoutProfileNestedInputObjectSchema } from './ServerUpdateManyWithoutProfileNestedInput.schema';
import { MemberUpdateManyWithoutProfileNestedInputObjectSchema as MemberUpdateManyWithoutProfileNestedInputObjectSchema } from './MemberUpdateManyWithoutProfileNestedInput.schema';
import { ChannelUpdateManyWithoutProfileNestedInputObjectSchema as ChannelUpdateManyWithoutProfileNestedInputObjectSchema } from './ChannelUpdateManyWithoutProfileNestedInput.schema';
import { ConversationUpdateManyWithoutMemberOneNestedInputObjectSchema as ConversationUpdateManyWithoutMemberOneNestedInputObjectSchema } from './ConversationUpdateManyWithoutMemberOneNestedInput.schema';
import { ConversationUpdateManyWithoutMemberTwoNestedInputObjectSchema as ConversationUpdateManyWithoutMemberTwoNestedInputObjectSchema } from './ConversationUpdateManyWithoutMemberTwoNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clerkId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  imageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  bio: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  servers: z.lazy(() => ServerUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  members: z.lazy(() => MemberUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUpdateManyWithoutProfileNestedInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationUpdateManyWithoutMemberOneNestedInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationUpdateManyWithoutMemberTwoNestedInputObjectSchema).optional()
}).strict();
export const ProfileUpdateWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileUpdateWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUpdateWithoutDirectMessagesInput>;
export const ProfileUpdateWithoutDirectMessagesInputObjectZodSchema = makeSchema();
