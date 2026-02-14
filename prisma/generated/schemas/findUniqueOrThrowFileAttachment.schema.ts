import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';

export const FileAttachmentFindUniqueOrThrowSchema: z.ZodType<Prisma.FileAttachmentFindUniqueOrThrowArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileAttachmentFindUniqueOrThrowArgs>;

export const FileAttachmentFindUniqueOrThrowZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema }).strict();