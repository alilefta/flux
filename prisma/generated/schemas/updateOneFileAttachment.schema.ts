import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentUpdateInputObjectSchema as FileAttachmentUpdateInputObjectSchema } from './objects/FileAttachmentUpdateInput.schema';
import { FileAttachmentUncheckedUpdateInputObjectSchema as FileAttachmentUncheckedUpdateInputObjectSchema } from './objects/FileAttachmentUncheckedUpdateInput.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';

export const FileAttachmentUpdateOneSchema: z.ZodType<Prisma.FileAttachmentUpdateArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), data: z.union([FileAttachmentUpdateInputObjectSchema, FileAttachmentUncheckedUpdateInputObjectSchema]), where: FileAttachmentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FileAttachmentUpdateArgs>;

export const FileAttachmentUpdateOneZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), data: z.union([FileAttachmentUpdateInputObjectSchema, FileAttachmentUncheckedUpdateInputObjectSchema]), where: FileAttachmentWhereUniqueInputObjectSchema }).strict();