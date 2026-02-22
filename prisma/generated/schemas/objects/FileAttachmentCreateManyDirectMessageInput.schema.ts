import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  name: z.string(),
  type: z.string(),
  size: z.number().int().optional().nullable(),
  messageId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const FileAttachmentCreateManyDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateManyDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyDirectMessageInput>;
export const FileAttachmentCreateManyDirectMessageInputObjectZodSchema = makeSchema();
