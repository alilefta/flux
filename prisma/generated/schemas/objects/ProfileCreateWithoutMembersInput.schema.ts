import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateNestedManyWithoutProfileInputObjectSchema as ServerCreateNestedManyWithoutProfileInputObjectSchema } from './ServerCreateNestedManyWithoutProfileInput.schema';
import { ChannelCreateNestedManyWithoutProfileInputObjectSchema as ChannelCreateNestedManyWithoutProfileInputObjectSchema } from './ChannelCreateNestedManyWithoutProfileInput.schema';
import { ConversationCreateNestedManyWithoutMemberOneInputObjectSchema as ConversationCreateNestedManyWithoutMemberOneInputObjectSchema } from './ConversationCreateNestedManyWithoutMemberOneInput.schema';
import { ConversationCreateNestedManyWithoutMemberTwoInputObjectSchema as ConversationCreateNestedManyWithoutMemberTwoInputObjectSchema } from './ConversationCreateNestedManyWithoutMemberTwoInput.schema';
import { DirectMessageCreateNestedManyWithoutMemberInputObjectSchema as DirectMessageCreateNestedManyWithoutMemberInputObjectSchema } from './DirectMessageCreateNestedManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string(),
  imageUrl: z.string().optional().nullable(),
  email: z.string(),
  bio: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  servers: z.lazy(() => ServerCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationCreateNestedManyWithoutMemberOneInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationCreateNestedManyWithoutMemberTwoInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const ProfileCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.ProfileCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateWithoutMembersInput>;
export const ProfileCreateWithoutMembersInputObjectZodSchema = makeSchema();
