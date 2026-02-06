import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileScalarFieldEnumSchema } from './enums/ProfileScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileFindManySelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
    id: z.boolean().optional(),
    clerkId: z.boolean().optional(),
    name: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    email: z.boolean().optional(),
    servers: z.boolean().optional(),
    members: z.boolean().optional(),
    channels: z.boolean().optional(),
    conversationsInitiated: z.boolean().optional(),
    conversationsReceived: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProfileSelect>;

export const ProfileFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    clerkId: z.boolean().optional(),
    name: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    email: z.boolean().optional(),
    servers: z.boolean().optional(),
    members: z.boolean().optional(),
    channels: z.boolean().optional(),
    conversationsInitiated: z.boolean().optional(),
    conversationsReceived: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProfileFindManySchema: z.ZodType<Prisma.ProfileFindManyArgs> = z.object({ select: ProfileFindManySelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileFindManyArgs>;

export const ProfileFindManyZodSchema = z.object({ select: ProfileFindManySelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict();