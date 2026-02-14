import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateWithoutMessageInputObjectSchema as FileAttachmentCreateWithoutMessageInputObjectSchema } from './FileAttachmentCreateWithoutMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutMessageInput.schema';
import { FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema as FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema } from './FileAttachmentCreateOrConnectWithoutMessageInput.schema';
import { FileAttachmentCreateManyMessageInputEnvelopeObjectSchema as FileAttachmentCreateManyMessageInputEnvelopeObjectSchema } from './FileAttachmentCreateManyMessageInputEnvelope.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileAttachmentCreateManyMessageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectSchema: z.ZodType<Prisma.FileAttachmentUncheckedCreateNestedManyWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUncheckedCreateNestedManyWithoutMessageInput>;
export const FileAttachmentUncheckedCreateNestedManyWithoutMessageInputObjectZodSchema = makeSchema();
