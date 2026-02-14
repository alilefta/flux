import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerUncheckedCreateNestedManyWithoutProfileInputObjectSchema as ServerUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './ServerUncheckedCreateNestedManyWithoutProfileInput.schema';
import { MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema as MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutProfileInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutProfileInput.schema';
import { ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateNestedManyWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateNestedManyWithoutMemberTwoInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string().optional().nullable(),
  email: z.string(),
  bio: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  servers: z.lazy(() => ServerUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutDirectMessagesInput>;
export const ProfileUncheckedCreateWithoutDirectMessagesInputObjectZodSchema = makeSchema();
