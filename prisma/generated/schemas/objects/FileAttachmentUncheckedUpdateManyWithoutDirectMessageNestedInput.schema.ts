import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FileAttachmentCreateWithoutDirectMessageInputObjectSchema as FileAttachmentCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateWithoutDirectMessageInput.schema';
import { FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema as FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema } from './FileAttachmentUncheckedCreateWithoutDirectMessageInput.schema';
import { FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema as FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema } from './FileAttachmentCreateOrConnectWithoutDirectMessageInput.schema';
import { FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema as FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema } from './FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInput.schema';
import { FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema as FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema } from './FileAttachmentCreateManyDirectMessageInputEnvelope.schema';
import { FileAttachmentWhereUniqueInputObjectSchema as FileAttachmentWhereUniqueInputObjectSchema } from './FileAttachmentWhereUniqueInput.schema';
import { FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema as FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema } from './FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInput.schema';
import { FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectSchema as FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectSchema } from './FileAttachmentUpdateManyWithWhereWithoutDirectMessageInput.schema';
import { FileAttachmentScalarWhereInputObjectSchema as FileAttachmentScalarWhereInputObjectSchema } from './FileAttachmentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateWithoutDirectMessageInputObjectSchema).array(), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUncheckedCreateWithoutDirectMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentCreateOrConnectWithoutDirectMessageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FileAttachmentCreateManyDirectMessageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema), z.lazy(() => FileAttachmentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectSchema), z.lazy(() => FileAttachmentUpdateManyWithWhereWithoutDirectMessageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FileAttachmentScalarWhereInputObjectSchema), z.lazy(() => FileAttachmentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInputObjectSchema: z.ZodType<Prisma.FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInput>;
export const FileAttachmentUncheckedUpdateManyWithoutDirectMessageNestedInputObjectZodSchema = makeSchema();
