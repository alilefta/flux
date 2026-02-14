import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateWithoutMessageInputObjectSchema as FileAttachmentCreateWithoutMessageInputObjectSchema } from './FileAttachmentCreateWithoutMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutMessageInput.schema';
import { FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema as FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema } from './FileAttachmentCreateOrConnectWithoutMessageInput.schema';
import { FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema as FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './FileAttachmentUpsertWithWhereUniqueWithoutMessageInput.schema';
import { FileAttachmentCreateManyMessageInputEnvelopeObjectSchema as FileAttachmentCreateManyMessageInputEnvelopeObjectSchema } from './FileAttachmentCreateManyMessageInputEnvelope.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema as FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './FileAttachmentUpdateWithWhereUniqueWithoutMessageInput.schema';
import { FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema as FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema } from './FileAttachmentUpdateManyWithWhereWithoutMessageInput.schema';
import { FileAttachmentScalarWhereInputObjectSchema as FileAttachmentScalarWhereInputObjectSchema } from './FileAttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUpsertWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileAttachmentCreateManyMessageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUpdateWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema), z.lazy(() => FileAttachmentUpdateManyWithWhereWithoutMessageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileAttachmentScalarWhereInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectSchema: z.ZodType<Prisma.FileAttachmentUncheckedUpdateManyWithoutMessageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUncheckedUpdateManyWithoutMessageNestedInput>;
export const FileAttachmentUncheckedUpdateManyWithoutMessageNestedInputObjectZodSchema = makeSchema();
