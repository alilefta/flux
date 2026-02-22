import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithoutDirectMessageInputObjectSchema as FileAttachmentUpdateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUpdateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateWithoutDirectMessageInput.schema';
import { FileAttachmentCreateWithoutDirectMessageInputObjectSchema as FileAttachmentCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileAttachmentUpdateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateWithoutDirectMessageInputObjectSchema)]),
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInput>;
export const FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectZodSchema = makeSchema();
