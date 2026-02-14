import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateManyMessageInputObjectSchema as FileAttachmentCreateManyMessageInputObjectSchema } from './FileAttachmentCreateManyMessageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileAttachmentCreateManyMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateManyMessageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileAttachmentCreateManyMessageInputEnvelopeObjectSchema: z.ZodType<Prisma.FileAttachmentCreateManyMessageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyMessageInputEnvelope>;
export const FileAttachmentCreateManyMessageInputEnvelopeObjectZodSchema = makeSchema();
