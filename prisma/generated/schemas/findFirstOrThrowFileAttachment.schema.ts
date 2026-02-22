import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentOrderByWithRelationInputObjectSchema as FileAttachmentOrderByWithRelationInputObjectSchema } from './objects/FileAttachmentOrderByWithRelationInput.schema';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './objects/FileAttachmentWhereInput.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentScalarFieldEnumSchema } from './enums/FileAttachmentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FileAttachmentFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FileAttachmentSelect> = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    size: z.boolean().optional(),
    messageId: z.boolean().optional(),
    message: z.boolean().optional(),
    directMessageId: z.boolean().optional(),
    directMessage: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FileAttachmentSelect>;

export const FileAttachmentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    url: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    size: z.boolean().optional(),
    messageId: z.boolean().optional(),
    message: z.boolean().optional(),
    directMessageId: z.boolean().optional(),
    directMessage: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const FileAttachmentFindFirstOrThrowSchema: z.ZodType<Prisma.FileAttachmentFindFirstOrThrowArgs> = z.object({ select: FileAttachmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FileAttachmentIncludeObjectSchema.optional()), orderBy: z.union([FileAttachmentOrderByWithRelationInputObjectSchema, FileAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileAttachmentWhereInputObjectSchema.optional(), cursor: FileAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileAttachmentScalarFieldEnumSchema, FileAttachmentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentFindFirstOrThrowArgs>;

export const FileAttachmentFindFirstOrThrowZodSchema = z.object({ select: FileAttachmentFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FileAttachmentIncludeObjectSchema.optional()), orderBy: z.union([FileAttachmentOrderByWithRelationInputObjectSchema, FileAttachmentOrderByWithRelationInputObjectSchema.array()]).optional(), where: FileAttachmentWhereInputObjectSchema.optional(), cursor: FileAttachmentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FileAttachmentScalarFieldEnumSchema, FileAttachmentScalarFieldEnumSchema.array()]).optional() }).strict();