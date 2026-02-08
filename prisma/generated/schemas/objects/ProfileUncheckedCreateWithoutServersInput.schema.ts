import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema as MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './MemberUncheckedCreateNestedManyWithoutProfileInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema as ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutProfileInput.schema';
import { ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateNestedManyWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateNestedManyWithoutMemberTwoInput.schema';
import { DirectMessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema as DirectMessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema } from './DirectMessageUncheckedCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string().optional().nullable(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  members: z.lazy(() => MemberUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutMemberTwoInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const ProfileUncheckedCreateWithoutServersInputObjectSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutServersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileUncheckedCreateWithoutServersInput>;
export const ProfileUncheckedCreateWithoutServersInputObjectZodSchema = makeSchema();
