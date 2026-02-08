import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateNestedManyWithoutProfileInputObjectSchema as ServerCreateNestedManyWithoutProfileInputObjectSchema } from './ServerCreateNestedManyWithoutProfileInput.schema';
import { MemberCreateNestedManyWithoutProfileInputObjectSchema as MemberCreateNestedManyWithoutProfileInputObjectSchema } from './MemberCreateNestedManyWithoutProfileInput.schema';
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
  createdAt: z.coerce.date().optional(),
  servers: z.lazy(() => ServerCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  members: z.lazy(() => MemberCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  channels: z.lazy(() => ChannelCreateNestedManyWithoutProfileInputObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationCreateNestedManyWithoutMemberOneInputObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationCreateNestedManyWithoutMemberTwoInputObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageCreateNestedManyWithoutMemberInputObjectSchema).optional()
}).strict();
export const ProfileCreateInputObjectSchema: z.ZodType<Prisma.ProfileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCreateInput>;
export const ProfileCreateInputObjectZodSchema = makeSchema();
