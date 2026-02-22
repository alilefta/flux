import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereInputObjectSchema as FileAttachmentWhereInputObjectSchema } from './FileAttachmentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereInputObjectSchema).optional()
}).strict();
export const DirectMessageCountOutputTypeCountAttachmentsArgsObjectSchema = makeSchema();
export const DirectMessageCountOutputTypeCountAttachmentsArgsObjectZodSchema = makeSchema();
