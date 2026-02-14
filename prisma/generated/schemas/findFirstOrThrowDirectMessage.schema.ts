import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { DirectMessageIncludeObjectSchema as DirectMessageIncludeObjectSchema } from './objects/DirectMessageInclude.schema';
import { DirectMessageOrderByWithRelationInputObjectSchema as DirectMessageOrderByWithRelationInputObjectSchema } from './objects/DirectMessageOrderByWithRelationInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './objects/DirectMessageWhereInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './objects/DirectMessageWhereUniqueInput.schema';
import { DirectMessageScalarFieldEnumSchema } from './enums/DirectMessageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DirectMessageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DirectMessageSelect> = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    fileUrl: z.boolean().optional(),
    memberId: z.boolean().optional(),
    member: z.boolean().optional(),
    conversationId: z.boolean().optional(),
    conversation: z.boolean().optional(),
    deleted: z.boolean().optional(),
    edited: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DirectMessageSelect>;

export const DirectMessageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    fileUrl: z.boolean().optional(),
    memberId: z.boolean().optional(),
    member: z.boolean().optional(),
    conversationId: z.boolean().optional(),
    conversation: z.boolean().optional(),
    deleted: z.boolean().optional(),
    edited: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DirectMessageFindFirstOrThrowSchema: z.ZodType<Prisma.DirectMessageFindFirstOrThrowArgs> = z.object({ select: DirectMessageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DirectMessageIncludeObjectSchema.optional()), orderBy: z.union([DirectMessageOrderByWithRelationInputObjectSchema, DirectMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DirectMessageWhereInputObjectSchema.optional(), cursor: DirectMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DirectMessageScalarFieldEnumSchema, DirectMessageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DirectMessageFindFirstOrThrowArgs>;

export const DirectMessageFindFirstOrThrowZodSchema = z.object({ select: DirectMessageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => DirectMessageIncludeObjectSchema.optional()), orderBy: z.union([DirectMessageOrderByWithRelationInputObjectSchema, DirectMessageOrderByWithRelationInputObjectSchema.array()]).optional(), where: DirectMessageWhereInputObjectSchema.optional(), cursor: DirectMessageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DirectMessageScalarFieldEnumSchema, DirectMessageScalarFieldEnumSchema.array()]).optional() }).strict();