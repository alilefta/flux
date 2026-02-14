import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ChannelCategoryIncludeObjectSchema as ChannelCategoryIncludeObjectSchema } from './objects/ChannelCategoryInclude.schema';
import { ChannelCategoryOrderByWithRelationInputObjectSchema as ChannelCategoryOrderByWithRelationInputObjectSchema } from './objects/ChannelCategoryOrderByWithRelationInput.schema';
import { ChannelCategoryWhereInputObjectSchema as ChannelCategoryWhereInputObjectSchema } from './objects/ChannelCategoryWhereInput.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './objects/ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryScalarFieldEnumSchema } from './enums/ChannelCategoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChannelCategoryFindManySelectSchema: z.ZodType<Prisma.ChannelCategorySelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    position: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    channels: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChannelCategorySelect>;

export const ChannelCategoryFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    position: z.boolean().optional(),
    serverId: z.boolean().optional(),
    server: z.boolean().optional(),
    channels: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ChannelCategoryFindManySchema: z.ZodType<Prisma.ChannelCategoryFindManyArgs> = z.object({ select: ChannelCategoryFindManySelectSchema.optional(), include: z.lazy(() => ChannelCategoryIncludeObjectSchema.optional()), orderBy: z.union([ChannelCategoryOrderByWithRelationInputObjectSchema, ChannelCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelCategoryWhereInputObjectSchema.optional(), cursor: ChannelCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChannelCategoryScalarFieldEnumSchema, ChannelCategoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChannelCategoryFindManyArgs>;

export const ChannelCategoryFindManyZodSchema = z.object({ select: ChannelCategoryFindManySelectSchema.optional(), include: z.lazy(() => ChannelCategoryIncludeObjectSchema.optional()), orderBy: z.union([ChannelCategoryOrderByWithRelationInputObjectSchema, ChannelCategoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChannelCategoryWhereInputObjectSchema.optional(), cursor: ChannelCategoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChannelCategoryScalarFieldEnumSchema, ChannelCategoryScalarFieldEnumSchema.array()]).optional() }).strict();