import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProfileScalarRelationFilterObjectSchema as ProfileScalarRelationFilterObjectSchema } from './ProfileScalarRelationFilter.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { MemberListRelationFilterObjectSchema as MemberListRelationFilterObjectSchema } from './MemberListRelationFilter.schema';
import { ChannelListRelationFilterObjectSchema as ChannelListRelationFilterObjectSchema } from './ChannelListRelationFilter.schema';
import { ChannelCategoryListRelationFilterObjectSchema as ChannelCategoryListRelationFilterObjectSchema } from './ChannelCategoryListRelationFilter.schema';
import { AuditLogListRelationFilterObjectSchema as AuditLogListRelationFilterObjectSchema } from './AuditLogListRelationFilter.schema'

const serverwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ServerWhereInputObjectSchema), z.lazy(() => ServerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ServerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ServerWhereInputObjectSchema), z.lazy(() => ServerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  imageUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  inviteCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  memberCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  profile: z.union([z.lazy(() => ProfileScalarRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)]).optional(),
  members: z.lazy(() => MemberListRelationFilterObjectSchema).optional(),
  channels: z.lazy(() => ChannelListRelationFilterObjectSchema).optional(),
  categories: z.lazy(() => ChannelCategoryListRelationFilterObjectSchema).optional(),
  auditLog: z.lazy(() => AuditLogListRelationFilterObjectSchema).optional()
}).strict();
export const ServerWhereInputObjectSchema: z.ZodType<Prisma.ServerWhereInput> = serverwhereinputSchema as unknown as z.ZodType<Prisma.ServerWhereInput>;
export const ServerWhereInputObjectZodSchema = serverwhereinputSchema;
