import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCountOutputTypeCountServersArgsObjectSchema as ProfileCountOutputTypeCountServersArgsObjectSchema } from './ProfileCountOutputTypeCountServersArgs.schema';
import { ProfileCountOutputTypeCountMembersArgsObjectSchema as ProfileCountOutputTypeCountMembersArgsObjectSchema } from './ProfileCountOutputTypeCountMembersArgs.schema';
import { ProfileCountOutputTypeCountChannelsArgsObjectSchema as ProfileCountOutputTypeCountChannelsArgsObjectSchema } from './ProfileCountOutputTypeCountChannelsArgs.schema';
import { ProfileCountOutputTypeCountConversationsInitiatedArgsObjectSchema as ProfileCountOutputTypeCountConversationsInitiatedArgsObjectSchema } from './ProfileCountOutputTypeCountConversationsInitiatedArgs.schema';
import { ProfileCountOutputTypeCountConversationsReceivedArgsObjectSchema as ProfileCountOutputTypeCountConversationsReceivedArgsObjectSchema } from './ProfileCountOutputTypeCountConversationsReceivedArgs.schema';
import { ProfileCountOutputTypeCountDirectMessagesArgsObjectSchema as ProfileCountOutputTypeCountDirectMessagesArgsObjectSchema } from './ProfileCountOutputTypeCountDirectMessagesArgs.schema'

const makeSchema = () => z.object({
  servers: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountServersArgsObjectSchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  channels: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountChannelsArgsObjectSchema)]).optional(),
  conversationsInitiated: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountConversationsInitiatedArgsObjectSchema)]).optional(),
  conversationsReceived: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountConversationsReceivedArgsObjectSchema)]).optional(),
  directMessages: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeCountDirectMessagesArgsObjectSchema)]).optional()
}).strict();
export const ProfileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProfileCountOutputTypeSelect>;
export const ProfileCountOutputTypeSelectObjectZodSchema = makeSchema();
