import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateWithoutDirectMessageInputObjectSchema as FileAttachmentCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutDirectMessageInput.schema';
import { FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema as FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateOrConnectWithoutDirectMessageInput.schema';
import { FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema as FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema } from './FileAttachmentCreateManyDirectMessageInputEnvelope.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema).array(), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileAttachmentCreateNestedManyWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentCreateNestedManyWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentCreateNestedManyWithoutDirectMessageInput>;
export const FileAttachmentCreateNestedManyWithoutDirectMessageInputObjectZodSchema = makeSchema();
