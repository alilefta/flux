import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentSelectObjectSchema as FileAttachmentSelectObjectSchema } from './objects/FileAttachmentSelect.schema';
import { FileAttachmentCreateManyInputObjectSchema as FileAttachmentCreateManyInputObjectSchema } from './objects/FileAttachmentCreateManyInput.schema';

export const FileAttachmentCreateManyAndReturnSchema: z.ZodType<Prisma.FileAttachmentCreateManyAndReturnArgs> = z.object({ select: FileAttachmentSelectObjectSchema.optional(), data: z.union([ FileAttachmentCreateManyInputObjectSchema, z.array(FileAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyAndReturnArgs>;

export const FileAttachmentCreateManyAndReturnZodSchema = z.object({ select: FileAttachmentSelectObjectSchema.optional(), data: z.union([ FileAttachmentCreateManyInputObjectSchema, z.array(FileAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();