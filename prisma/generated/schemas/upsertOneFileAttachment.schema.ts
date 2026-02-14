import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentIncludeObjectSchema as FileAttachmentIncludeObjectSchema } from './objects/FileAttachmentInclude.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './objects/FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentCreateInputObjectSchema as FileAttachmentCreateInputObjectSchema } from './objects/FileAttachmentCreateInput.schema';
import { FileAttachmentUncheckedCreateInputObjectSchema as FileAttachmentUncheckedCreateInputObjectSchema } from './objects/FileAttachmentUncheckedCreateInput.schema';
import { FileAttachmentUpdateInputObjectSchema as FileAttachmentUpdateInputObjectSchema } from './objects/FileAttachmentUpdateInput.schema';
import { FileAttachmentUncheckedUpdateInputObjectSchema as FileAttachmentUncheckedUpdateInputObjectSchema } from './objects/FileAttachmentUncheckedUpdateInput.schema';

export const FileAttachmentUpsertOneSchema: z.ZodType<Prisma.FileAttachmentUpsertArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema, create: z.union([ FileAttachmentCreateInputObjectSchema, FileAttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ FileAttachmentUpdateInputObjectSchema, FileAttachmentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FileAttachmentUpsertArgs>;

export const FileAttachmentUpsertOneZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), include: FileAttachmentIncludeObjectSchema.optional(), where: FileAttachmentWhereUniqueInputObjectSchema, create: z.union([ FileAttachmentCreateInputObjectSchema, FileAttachmentUncheckedCreateInputObjectSchema ]), update: z.union([ FileAttachmentUpdateInputObjectSchema, FileAttachmentUncheckedUpdateInputObjectSchema ]) }).strict();