import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateManyDirectMessageInputObjectSchema as FileAttachmentCreateManyDirectMessageInputObjectSchema } from './FileAttachmentCreateManyDirectMessageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileAttachmentCreateManyDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateManyDirectMessageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema: z.ZodType<Prisma.FileAttachmentCreateManyDirectMessageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateManyDirectMessageInputEnvelope>;
export const FileAttachmentCreateManyDirectMessageInputEnvelopeObjectZodSchema = makeSchema();
