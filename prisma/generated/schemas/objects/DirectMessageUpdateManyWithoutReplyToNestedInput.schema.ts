import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutReplyToInputObjectSchema as DirectMessageCreateWithoutReplyToInputObjectSchema } from './DirectMessageCreateWithoutReplyToInput.schema';
import { DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema as DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReplyToInput.schema';
import { DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema as DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema } from './DirectMessageCreateOrConnectWithoutReplyToInput.schema';
import { DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema as DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema } from './DirectMessageUpsertWithWhereUniqueWithoutReplyToInput.schema';
import { DirectMessageCreateManyReplyToInputEnvelopeObjectSchema as DirectMessageCreateManyReplyToInputEnvelopeObjectSchema } from './DirectMessageCreateManyReplyToInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema as DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema } from './DirectMessageUpdateWithWhereUniqueWithoutReplyToInput.schema';
import { DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectSchema as DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectSchema } from './DirectMessageUpdateManyWithWhereWithoutReplyToInput.schema';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyReplyToInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DirectMessageScalarWhereInputObjectSchema), z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageUpdateManyWithoutReplyToNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateManyWithoutReplyToNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyWithoutReplyToNestedInput>;
export const DirectMessageUpdateManyWithoutReplyToNestedInputObjectZodSchema = makeSchema();
