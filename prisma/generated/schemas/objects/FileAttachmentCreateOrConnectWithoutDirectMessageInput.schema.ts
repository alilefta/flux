import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentCreateWithoutDirectMessageInputObjectSchema as FileAttachmentCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateOrConnectWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateOrConnectWithoutDirectMessageInput>;
export const FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectZodSchema = makeSchema();
