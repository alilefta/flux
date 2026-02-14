import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const FileAttachmentCreateManyMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateManyMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyMessageInput>;
export const FileAttachmentCreateManyMessageInputObjectZodSchema = makeSchema();
