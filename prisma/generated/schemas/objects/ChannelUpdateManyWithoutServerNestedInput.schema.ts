import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutServerInputObjectSchema as ChannelCreateWithoutServerInputObjectSchema } from './ChannelCreateWithoutServerInput.schema';
import { ChannelUncheckedCreateWithoutServerInputObjectSchema as ChannelUncheckedCreateWithoutServerInputObjectSchema } from './ChannelUncheckedCreateWithoutServerInput.schema';
import { ChannelCreateOrConnectWithoutServerInputObjectSchema as ChannelCreateOrConnectWithoutServerInputObjectSchema } from './ChannelCreateOrConnectWithoutServerInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema as ChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutServerInput.schema';
import { ChannelCreateManyServerInputEnvelopeObjectSchema as ChannelCreateManyServerInputEnvelopeObjectSchema } from './ChannelCreateManyServerInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema as ChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutServerInput.schema';
import { ChannelUpdateManyWithWhereWithoutServerInputObjectSchema as ChannelUpdateManyWithWhereWithoutServerInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutServerInput.schema';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCreateWithoutServerInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => ChannelUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => ChannelUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => ChannelUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelScalarWhereInputObjectSchema), z.lazy(() => ChannelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChannelUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.ChannelUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateManyWithoutServerNestedInput>;
export const ChannelUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
