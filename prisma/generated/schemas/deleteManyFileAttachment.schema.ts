import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './objects/FileAttachmentWhereInput.schema';

export const FileAttachmentDeleteManySchema: z.ZodType<Prisma.FileAttachmentDeleteManyArgs> = z.object({ where: FileAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentDeleteManyArgs>;

export const FileAttachmentDeleteManyZodSchema = z.object({ where: FileAttachmentWhereInputObjectSchema.optional() }).strict();