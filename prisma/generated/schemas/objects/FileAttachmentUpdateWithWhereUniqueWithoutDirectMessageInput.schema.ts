import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithoutDirectMessageInputObjectSchema as FileAttachmentUpdateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUpdateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FileAttachmentUpdateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInput>;
export const FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectZodSchema = makeSchema();
