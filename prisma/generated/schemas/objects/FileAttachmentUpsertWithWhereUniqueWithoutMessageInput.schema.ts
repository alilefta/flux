import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithoutMessageInputObjectSchema as FileAttachmentUpdateWithoutMessageInputObjectSchema } from './FileAttachmentUpdateWithoutMessageInput.schema';
import { FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema as FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedUpdateWithoutMessageInput.schema';
import { FileAttachmentCreateWithoutMessageInputObjectSchema as FileAttachmentCreateWithoutMessageInputObjectSchema } from './FileAttachmentCreateWithoutMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FileAttachmentUpdateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedUpdateWithoutMessageInputObjectSchema)]),
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUpsertWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUpsertWithWhereUniqueWithoutMessageInput>;
export const FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
