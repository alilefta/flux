import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MemberIncludeObjectSchema as MemberIncludeObjectSchema } from './objects/MemberInclude.schema';
import { MemberOrderByWithRelationInputObjectSchema as MemberOrderByWithRelationInputObjectSchema } from './objects/MemberOrderByWithRelationInput.schema';
import { MemberWhereInputObjectSchema as MemberWhereInputObjectSchema } from './objects/MemberWhereInput.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './objects/MemberWhereUniqueInput.schema';
import { MemberScalarFieldEnumSchema } from './enums/MemberScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MemberFindFirstSelectSchema: z.ZodType<Prisma.MemberSelect> = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MemberSelect>;

export const MemberFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    role: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    messages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const MemberFindFirstSchema: z.ZodType<Prisma.MemberFindFirstArgs> = z.object({ select: MemberFindFirstSelectSchema.optional(), include: z.lazy(() => MemberIncludeObjectSchema.optional()), orderBy: z.union([MemberOrderByWithRelationInputObjectSchema, MemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: MemberWhereInputObjectSchema.optional(), cursor: MemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MemberFindFirstArgs>;

export const MemberFindFirstZodSchema = z.object({ select: MemberFindFirstSelectSchema.optional(), include: z.lazy(() => MemberIncludeObjectSchema.optional()), orderBy: z.union([MemberOrderByWithRelationInputObjectSchema, MemberOrderByWithRelationInputObjectSchema.array()]).optional(), where: MemberWhereInputObjectSchema.optional(), cursor: MemberWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MemberScalarFieldEnumSchema, MemberScalarFieldEnumSchema.array()]).optional() }).strict();