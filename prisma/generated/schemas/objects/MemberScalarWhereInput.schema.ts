import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumMemberRoleFilterObjectSchema as EnumMemberRoleFilterObjectSchema } from './EnumMemberRoleFilter.schema';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const memberscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => MemberScalarWhereInputObjectSchema), z.lazy(() => MemberScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MemberScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MemberScalarWhereInputObjectSchema), z.lazy(() => MemberScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  role: z.union([z.lazy(() => EnumMemberRoleFilterObjectSchema), MemberRoleSchema]).optional(),
  profileId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  serverId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const MemberScalarWhereInputObjectSchema: z.ZodType<Prisma.MemberScalarWhereInput> = memberscalarwhereinputSchema as unknown as z.ZodType<Prisma.MemberScalarWhereInput>;
export const MemberScalarWhereInputObjectZodSchema = memberscalarwhereinputSchema;
