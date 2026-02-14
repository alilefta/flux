import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCreateWithoutServerInputObjectSchema as ChannelCategoryCreateWithoutServerInputObjectSchema } from './ChannelCategoryCreateWithoutServerInput.schema';
import { ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema as ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutServerInput.schema';
import { ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema as ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema } from './ChannelCategoryCreateOrConnectWithoutServerInput.schema';
import { ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectSchema as ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './ChannelCategoryUpsertWithWhereUniqueWithoutServerInput.schema';
import { ChannelCategoryCreateManyServerInputEnvelopeObjectSchema as ChannelCategoryCreateManyServerInputEnvelopeObjectSchema } from './ChannelCategoryCreateManyServerInputEnvelope.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema';
import { ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectSchema as ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './ChannelCategoryUpdateWithWhereUniqueWithoutServerInput.schema';
import { ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectSchema as ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectSchema } from './ChannelCategoryUpdateManyWithWhereWithoutServerInput.schema';
import { ChannelCategoryScalarWhereInputObjectSchema as ChannelCategoryScalarWhereInputObjectSchema } from './ChannelCategoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema).array(), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCategoryCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema), z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema), z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema), z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema), z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema), z.lazy(() => ChannelCategoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChannelCategoryUncheckedUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedUpdateManyWithoutServerNestedInput>;
export const ChannelCategoryUncheckedUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
