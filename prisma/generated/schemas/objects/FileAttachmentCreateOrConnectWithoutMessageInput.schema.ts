import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentCreateWithoutMessageInputObjectSchema as FileAttachmentCreateWithoutMessageInputObjectSchema } from './FileAttachmentCreateWithoutMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateOrConnectWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateOrConnectWithoutMessageInput>;
export const FileAttachmentCreateOrConnectWithoutMessageInputObjectZodSchema = makeSchema();
