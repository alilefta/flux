import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentUpdateManyMutationInputObjectSchema as FileAttachmentUpdateManyMutationInputObjectSchema } from './objects/FileAttachmentUpdateManyMutationInput.schema';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './objects/FileAttachmentWhereInput.schema';

export const FileAttachmentUpdateManySchema: z.ZodType<Prisma.FileAttachmentUpdateManyArgs> = z.object({ data: FileAttachmentUpdateManyMutationInputObjectSchema, where: FileAttachmentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentUpdateManyArgs>;

export const FileAttachmentUpdateManyZodSchema = z.object({ data: FileAttachmentUpdateManyMutationInputObjectSchema, where: FileAttachmentWhereInputObjectSchema.optional() }).strict();