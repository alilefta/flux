import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ConversationIncludeObjectSchema as ConversationIncludeObjectSchema } from './objects/ConversationInclude.schema';
import { ConversationOrderByWithRelationInputObjectSchema as ConversationOrderByWithRelationInputObjectSchema } from './objects/ConversationOrderByWithRelationInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './objects/ConversationWhereInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema';
import { ConversationScalarFieldEnumSchema } from './enums/ConversationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConversationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ConversationSelect> = z.object({
    id: z.boolean().optional(),
    memberOneId: z.boolean().optional(),
    memberOne: z.boolean().optional(),
    memberTwoId: z.boolean().optional(),
    memberTwo: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ConversationSelect>;

export const ConversationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    memberOneId: z.boolean().optional(),
    memberOne: z.boolean().optional(),
    memberTwoId: z.boolean().optional(),
    memberTwo: z.boolean().optional(),
    directMessages: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ConversationFindFirstOrThrowSchema: z.ZodType<Prisma.ConversationFindFirstOrThrowArgs> = z.object({ select: ConversationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConversationIncludeObjectSchema.optional()), orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConversationScalarFieldEnumSchema, ConversationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConversationFindFirstOrThrowArgs>;

export const ConversationFindFirstOrThrowZodSchema = z.object({ select: ConversationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ConversationIncludeObjectSchema.optional()), orderBy: z.union([ConversationOrderByWithRelationInputObjectSchema, ConversationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConversationWhereInputObjectSchema.optional(), cursor: ConversationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConversationScalarFieldEnumSchema, ConversationScalarFieldEnumSchema.array()]).optional() }).strict();