import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberRoleSchema } from '../enums/MemberRole.schema';
import { NestedEnumMemberRoleWithAggregatesFilterObjectSchema as NestedEnumMemberRoleWithAggregatesFilterObjectSchema } from './NestedEnumMemberRoleWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMemberRoleFilterObjectSchema as NestedEnumMemberRoleFilterObjectSchema } from './NestedEnumMemberRoleFilter.schema'

const makeSchema = () => z.object({
  equals: MemberRoleSchema.optional(),
  in: MemberRoleSchema.array().optional(),
  notIn: MemberRoleSchema.array().optional(),
  not: z.union([MemberRoleSchema, z.lazy(() => NestedEnumMemberRoleWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumMemberRoleFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumMemberRoleFilterObjectSchema).optional()
}).strict();
export const EnumMemberRoleWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumMemberRoleWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumMemberRoleWithAggregatesFilter>;
export const EnumMemberRoleWithAggregatesFilterObjectZodSchema = makeSchema();
