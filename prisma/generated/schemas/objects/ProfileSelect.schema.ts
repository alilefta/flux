import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerFindManySchema as ServerFindManySchema } from '../findManyServer.schema';
import { MemberFindManySchema as MemberFindManySchema } from '../findManyMember.schema';
import { ChannelFindManySchema as ChannelFindManySchema } from '../findManyChannel.schema';
import { ConversationFindManySchema as ConversationFindManySchema } from '../findManyConversation.schema';
import { DirectMessageFindManySchema as DirectMessageFindManySchema } from '../findManyDirectMessage.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './ProfileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  clerkId: z.boolean().optional(),
  name: z.boolean().optional(),
  imageUrl: z.boolean().optional(),
  email: z.boolean().optional(),
  servers: z.union([z.boolean(), z.lazy(() => ServerFindManySchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => MemberFindManySchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ChannelFindManySchema)]).optional(),
  conversationsInitiated: z.union([z.boolean(), z.lazy(() => ConversationFindManySchema)]).optional(),
  conversationsReceived: z.union([z.boolean(), z.lazy(() => ConversationFindManySchema)]).optional(),
  directMessages: z.union([z.boolean(), z.lazy(() => DirectMessageFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProfileSelectObjectSchema: z.ZodType<Prisma.ProfileSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileSelect>;
export const ProfileSelectObjectZodSchema = makeSchema();
