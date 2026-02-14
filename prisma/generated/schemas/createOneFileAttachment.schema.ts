import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentCreateInputObjectSchema as FileAttachmentCreateInputObjectSchema } from './objects/FileAttachmentCreateInput.schema';
import { FileAttachmentUncheckedCreateInputObjectSchema as FileAttachmentUncheckedCreateInputObjectSchema } from './objects/FileAttachmentUncheckedCreateInput.schema';

export const FileAttachmentCreateOneSchema: z.ZodType<Prisma.FileAttachmentCreateArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), data: z.union([FileAttachmentCreateInputObjectSchema, FileAttachmentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FileAttachmentCreateArgs>;

export const FileAttachmentCreateOneZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), data: z.union([FileAttachmentCreateInputObjectSchema, FileAttachmentUncheckedCreateInputObjectSchema]) }).strict();