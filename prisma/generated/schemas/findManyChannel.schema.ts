import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelIncludeObjectSchema as ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelOrderByWithRelationInputObjectSchema as ChannelOrderByWithRelationInputObjectSchema } from './objects/ChannelOrderByWithRelationInput.schema';
import { ChannelWhereInputObjectSchema as ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelScalarFieldEnumSchema } from './enums/ChannelScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChannelFindManySelectSchema: z.ZodType<Prisma.ChannelSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    messages: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChannelSelect>;

export const ChannelFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    profileId: z.boolean().optional(),
    profile: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    messages: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ChannelFindManySchema: z.ZodType<Prisma.ChannelFindManyArgs> = z.object({ select: ChannelFindManySelectSchema.optional(), include: z.lazy(() => ChannelIncludeObjectSchema.optional()), orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChannelScalarFieldEnumSchema, ChannelScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChannelFindManyArgs>;

export const ChannelFindManyZodSchema = z.object({ select: ChannelFindManySelectSchema.optional(), include: z.lazy(() => ChannelIncludeObjectSchema.optional()), orderBy: z.union([ChannelOrderByWithRelationInputObjectSchema, ChannelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelWhereInputObjectSchema.optional(), cursor: ChannelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChannelScalarFieldEnumSchema, ChannelScalarFieldEnumSchema.array()]).optional() }).strict();