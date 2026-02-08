import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMemberRoleFilterObjectSchema as NestedEnumMemberRoleFilterObjectSchema } from './NestedEnumMemberRoleFilter.schema'

const nestedenummemberrolewithaggregatesfilterSchema = z.object({
  equals: MemberRoleSchema.optional(),
  in: MemberRoleSchema.array().optional(),
  notIn: MemberRoleSchema.array().optional(),
  not: z.union([MemberRoleSchema, z.lazy(() => NestedEnumMemberRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMemberRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMemberRoleFilterObjectSchema).optional()
}).strict();
export const NestedEnumMemberRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumMemberRoleWithAggregatesFilter> = nestedenummemberrolewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumMemberRoleWithAggregatesFilter>;
export const NestedEnumMemberRoleWithAggregatesFilterObjectZodSchema = nestedenummemberrolewithaggregatesfilterSchema;
