import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerOrderByWithRelationInputObjectSchema as ServerOrderByWithRelationInputObjectSchema } from './objects/ServerOrderByWithRelationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
import { ServerScalarFieldEnumSchema } from './enums/ServerScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ServerFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ServerSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    inviteCode: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    members: z.boolean().optional(),
    channels: z.boolean().optional(),
    memberCount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ServerSelect>;

export const ServerFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    inviteCode: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    members: z.boolean().optional(),
    channels: z.boolean().optional(),
    memberCount: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ServerFindFirstOrThrowSchema: z.ZodType<Prisma.ServerFindFirstOrThrowArgs> = z.object({ select: ServerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ServerFindFirstOrThrowArgs>;

export const ServerFindFirstOrThrowZodSchema = z.object({ select: ServerFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ServerIncludeObjectSchema.optional()), orderBy: z.union([ServerOrderByWithRelationInputObjectSchema, ServerOrderByWithRelationInputObjectSchema.array()]).optional(), where: ServerWhereInputObjectSchema.optional(), cursor: ServerWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ServerScalarFieldEnumSchema, ServerScalarFieldEnumSchema.array()]).optional() }).strict();