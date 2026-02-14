import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithoutMessageInputObjectSchema as FileAttachmentUpdateWithoutMessageInputObjectSchema } from './FileAttachmentUpdateWithoutMessageInput.schema';
import { FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema as FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileAttachmentUpdateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpdateWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpdateWithWhereUniqueWithoutMessageInput>;
export const FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
