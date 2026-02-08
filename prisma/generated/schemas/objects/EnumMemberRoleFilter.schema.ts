import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { NestedEnumMemberRoleFilterObjectSchema as NestedEnumMemberRoleFilterObjectSchema } from './NestedEnumMemberRoleFilter.schema'

const makeSchema = () => z.object({
  equals: MemberRoleSchema.optional(),
  in: MemberRoleSchema.array().optional(),
  notIn: MemberRoleSchema.array().optional(),
  not: z.union([MemberRoleSchema, z.lazy(() => NestedEnumMemberRoleFilterObjectSchema)]).optional()
}).strict();
export const EnumMemberRoleFilterObjectSchema: z.ZodType<Prisma.EnumMemberRoleFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMemberRoleFilter>;
export const EnumMemberRoleFilterObjectZodSchema = makeSchema();
