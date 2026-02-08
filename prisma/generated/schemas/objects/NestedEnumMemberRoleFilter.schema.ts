import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema'

const nestedenummemberrolefilterSchema = z.object({
  equals: MemberRoleSchema.optional(),
  in: MemberRoleSchema.array().optional(),
  notIn: MemberRoleSchema.array().optional(),
  not: z.union([MemberRoleSchema, z.lazy(() => NestedEnumMemberRoleFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumMemberRoleFilterObjectSchema: z.ZodType<Prisma.NestedEnumMemberRoleFilter> = nestedenummemberrolefilterSchema as unknown as z.ZodType<Prisma.NestedEnumMemberRoleFilter>;
export const NestedEnumMemberRoleFilterObjectZodSchema = nestedenummemberrolefilterSchema;
