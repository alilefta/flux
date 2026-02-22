import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { MessageReactionIncludeObjectSchema as MessageReactionIncludeObjectSchema } from './objects/MessageReactionInclude.schema';
import { MessageReactionOrderByWithRelationInputObjectSchema as MessageReactionOrderByWithRelationInputObjectSchema } from './objects/MessageReactionOrderByWithRelationInput.schema';
import { MessageReactionWhereInputObjectSchema as MessageReactionWhereInputObjectSchema } from './objects/MessageReactionWhereInput.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './objects/MessageReactionWhereUniqueInput.schema';
import { MessageReactionScalarFieldEnumSchema } from './enums/MessageReactionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MessageReactionFindManySelectSchema: z.ZodType<Prisma.MessageReactionSelect> = z.object({
    id: z.boolean().optional(),
    emoji: z.boolean().optional(),
    messageId: z.boolean().optional(),
    message: z.boolean().optional(),
    directMessageId: z.boolean().optional(),
    directMessage: z.boolean().optional(),
    memberId: z.boolean().optional(),
    profileId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.MessageReactionSelect>;

export const MessageReactionFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    emoji: z.boolean().optional(),
    messageId: z.boolean().optional(),
    message: z.boolean().optional(),
    directMessageId: z.boolean().optional(),
    directMessage: z.boolean().optional(),
    memberId: z.boolean().optional(),
    profileId: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const MessageReactionFindManySchema: z.ZodType<Prisma.MessageReactionFindManyArgs> = z.object({ select: MessageReactionFindManySelectSchema.optional(), include: z.lazy(() => MessageReactionIncludeObjectSchema.optional()), orderBy: z.union([MessageReactionOrderByWithRelationInputObjectSchema, MessageReactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MessageReactionWhereInputObjectSchema.optional(), cursor: MessageReactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MessageReactionScalarFieldEnumSchema, MessageReactionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.MessageReactionFindManyArgs>;

export const MessageReactionFindManyZodSchema = z.object({ select: MessageReactionFindManySelectSchema.optional(), include: z.lazy(() => MessageReactionIncludeObjectSchema.optional()), orderBy: z.union([MessageReactionOrderByWithRelationInputObjectSchema, MessageReactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: MessageReactionWhereInputObjectSchema.optional(), cursor: MessageReactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MessageReactionScalarFieldEnumSchema, MessageReactionScalarFieldEnumSchema.array()]).optional() }).strict();