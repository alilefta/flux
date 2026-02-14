import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutCategoryInputObjectSchema as ChannelCreateWithoutCategoryInputObjectSchema } from './ChannelCreateWithoutCategoryInput.schema';
import { ChannelUncheckedCreateWithoutCategoryInputObjectSchema as ChannelUncheckedCreateWithoutCategoryInputObjectSchema } from './ChannelUncheckedCreateWithoutCategoryInput.schema';
import { ChannelCreateOrConnectWithoutCategoryInputObjectSchema as ChannelCreateOrConnectWithoutCategoryInputObjectSchema } from './ChannelCreateOrConnectWithoutCategoryInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ChannelCreateManyCategoryInputEnvelopeObjectSchema as ChannelCreateManyCategoryInputEnvelopeObjectSchema } from './ChannelCreateManyCategoryInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema as ChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutCategoryInput.schema';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => ChannelUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelScalarWhereInputObjectSchema), z.lazy(() => ChannelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChannelUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.ChannelUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUpdateManyWithoutCategoryNestedInput>;
export const ChannelUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
