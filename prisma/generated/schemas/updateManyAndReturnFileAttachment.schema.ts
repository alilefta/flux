import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentUpdateManyMutationInputObjectSchema as FileAttachmentUpdateManyMutationInputObjectSchema } from './objects/FileAttachmentUpdateManyMutationInput.schema';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './objects/FileAttachmentWhereInput.schema';

export const FileAttachmentUpdateManyAndReturnSchema: z.ZodType<Prisma.FileAttachmentUpdateManyAndReturnArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), data: FileAttachmentUpdateManyMutationInputObjectSchema, where: FileAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentUpdateManyAndReturnArgs>;

export const FileAttachmentUpdateManyAndReturnZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), data: FileAttachmentUpdateManyMutationInputObjectSchema, where: FileAttachmentWhereInputObjectSchema.optional() }).strict();