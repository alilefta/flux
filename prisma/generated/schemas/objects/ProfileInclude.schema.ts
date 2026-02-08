import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerFindManySchema as ServerFindManySchema } from '../findManyServer.schema';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ConversationFindManySchema as ConversationFindManySchema } from '../findManyConversation.schema';
import { DirectMessageFindManySchema as DirectMessageFindManySchema } from '../findManyDirectMessage.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  servers: z.union([z.boolean(), z.lazy(() => ServerFindManySchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  conversationsInitiated: z.union([z.boolean(), z.lazy(() => ConversationFindManySchema)]).optional(),
  conversationsReceived: z.union([z.boolean(), z.lazy(() => ConversationFindManySchema)]).optional(),
  directMessages: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileIncludeObjectSchema: z.ZodType<Prisma.ProfileInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProfileInclude>;
export const ProfileIncludeObjectZodSchema = makeSchema();
