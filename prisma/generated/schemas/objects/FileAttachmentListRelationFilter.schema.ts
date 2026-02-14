import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './FileAttachmentWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FileAttachmentWhereInputObjectSchema).optional(),
  some: z.lazy(() => FileAttachmentWhereInputObjectSchema).optional(),
  none: z.lazy(() => FileAttachmentWhereInputObjectSchema).optional()
}).strict();
export const FileAttachmentListRelationFilterObjectSchema: z.ZodType<Prisma.FileAttachmentListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentListRelationFilter>;
export const FileAttachmentListRelationFilterObjectZodSchema = makeSchema();
