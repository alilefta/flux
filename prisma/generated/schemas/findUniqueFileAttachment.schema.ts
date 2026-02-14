import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';

export const FileAttachmentFindUniqueSchema: z.ZodType<Prisma.FileAttachmentFindUniqueArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileAttachmentFindUniqueArgs>;

export const FileAttachmentFindUniqueZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict();