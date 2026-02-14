import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';

export const FileAttachmentDeleteOneSchema: z.ZodType<Prisma.FileAttachmentDeleteArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileAttachmentDeleteArgs>;

export const FileAttachmentDeleteOneZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict();