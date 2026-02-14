import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FileAttachmentCreateManyInputObjectSchema as FileAttachmentCreateManyInputObjectSchema } from './objects/FileAttachmentCreateManyInput.schema';

export const FileAttachmentCreateManySchema: z.ZodType<Prisma.FileAttachmentCreateManyArgs> = z.object({ data: z.union([ FileAttachmentCreateManyInputObjectSchema, z.array(FileAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyArgs>;

export const FileAttachmentCreateManyZodSchema = z.object({ data: z.union([ FileAttachmentCreateManyInputObjectSchema, z.array(FileAttachmentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();