import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ServerListRelationFilterObjectSchema as ServerListRelationFilterObjectSchema } from './ServerListRelationFilter.schema';
import { MemberListRelationFilterObjectSchema as MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { ChannelListRelationFilterObjectSchema as ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema';
import { ConversationListRelationFilterObjectSchema as ConversationListRelationFilterObjectSchema } from './ConversationListRelationFilter.schema';
import { DirectMessageListRelationFilterObjectSchema as DirectMessageListRelationFilterObjectSchema } from './DirectMessageListRelationFilter.schema'

const profilewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProfileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clerkId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  imageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  servers: z.lazy(() => ServerListRelationFilterObjectSchema).optional(),
  members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
  channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional(),
  conversationsInitiated: z.lazy(() => ConversationListRelationFilterObjectSchema).optional(),
  conversationsReceived: z.lazy(() => ConversationListRelationFilterObjectSchema).optional(),
  directMessages: z.lazy(() => DirectMessageListRelationFilterObjectSchema).optional()
}).strict();
export const ProfileWhereInputObjectSchema: z.ZodType<Prisma.ProfileWhereInput> = profilewhereinputSchema as unknown as z.ZodType<Prisma.ProfileWhereInput>;
export const ProfileWhereInputObjectZodSchema = profilewhereinputSchema;
