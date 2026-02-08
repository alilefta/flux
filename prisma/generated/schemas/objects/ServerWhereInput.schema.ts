import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { MemberListRelationFilterObjectSchema as MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { ChannelListRelationFilterObjectSchema as ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema'

const serverwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServerWhereInputObjectSchema), z.lazy(() => ServerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServerWhereInputObjectSchema), z.lazy(() => ServerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  imageUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inviteCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  memberCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
  channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional()
}).strict();
export const ServerWhereInputObjectSchema: z.ZodType<Prisma.ServerWhereInput> = serverwhereinputSchema as unknown as z.ZodType<Prisma.ServerWhereInput>;
export const ServerWhereInputObjectZodSchema = serverwhereinputSchema;
