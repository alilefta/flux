import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationOrderByWithRelationInputObjectSchema as ConversationOrderByWithRelationInputObjectSchema } from './objects/ConversationOrderByWithRelationInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';
import { ConversationScalarFieldEnumSchema } from './enums/ConversationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConversationFindFirstSelectSchema: z.ZodType<Prisma.ConversationSelect> = z.object({
    id: z.boolean().optional(),
    memberOneId: z.boolean().optional(),
    memberOne: z.boolean().optional(),
    memberTwoId: z.boolean().optional(),
    memberTwo: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ConversationSelect>;

export const ConversationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    memberOneId: z.boolean().optional(),
    memberOne: z.boolean().optional(),
    memberTwoId: z.boolean().optional(),
    memberTwo: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ConversationFindFirstSchema: z.ZodType<Prisma.ConversationFindFirstArgs> = z.object({ select: ConversationFindFirstSelectSchema.optional(), include: z.lazy(() => ConversationIncludeObjectSchema.optional()), orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConversationScalarFieldEnumSchema, ConversationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConversationFindFirstArgs>;

export const ConversationFindFirstZodSchema = z.object({ select: ConversationFindFirstSelectSchema.optional(), include: z.lazy(() => ConversationIncludeObjectSchema.optional()), orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConversationScalarFieldEnumSchema, ConversationScalarFieldEnumSchema.array()]).optional() }).strict();