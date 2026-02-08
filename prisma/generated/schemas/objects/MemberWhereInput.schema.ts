import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMemberRoleFilterObjectSchema as EnumMemberRoleFilterObjectSchema } from './EnumMemberRoleFilter.schema';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ServerScalarRelationFilterObjectSchema as ServerScalarRelationFilterObjectSchema } from './ServerScalarRelationFilter.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { MessageListRelationFilterObjectSchema as MessageListRelationFilterObjectSchema } from './MessageListRelationFilter.schema'

const memberwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MemberWhereInputObjectSchema), z.lazy(() => MemberWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MemberWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MemberWhereInputObjectSchema), z.lazy(() => MemberWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumMemberRoleFilterObjectSchema), MemberRoleSchema]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  server: z.union([z.lazy(() => ServerScalarRelationFilterObjectSchema), z.lazy(() => ServerWhereInputObjectSchema)]).optional(),
  messages: z.lazy(() => MessageListRelationFilterObjectSchema).optional()
}).strict();
export const MemberWhereInputObjectSchema: z.ZodType<Prisma.MemberWhereInput> = memberwhereinputSchema as unknown as z.ZodType<Prisma.MemberWhereInput>;
export const MemberWhereInputObjectZodSchema = memberwhereinputSchema;
