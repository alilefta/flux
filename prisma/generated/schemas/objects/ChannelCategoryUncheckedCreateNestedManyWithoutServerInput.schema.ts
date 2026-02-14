import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCategoryCreateWithoutServerInputObjectSchema as ChannelCategoryCreateWithoutServerInputObjectSchema } from './ChannelCategoryCreateWithoutServerInput.schema';
import { ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema as ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema } from './ChannelCategoryUncheckedCreateWithoutServerInput.schema';
import { ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema as ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema } from './ChannelCategoryCreateOrConnectWithoutServerInput.schema';
import { ChannelCategoryCreateManyServerInputEnvelopeObjectSchema as ChannelCategoryCreateManyServerInputEnvelopeObjectSchema } from './ChannelCategoryCreateManyServerInputEnvelope.schema';
import { ChannelCategoryWhereUniqueInputObjectSchema as ChannelCategoryWhereUniqueInputObjectSchema } from './ChannelCategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryCreateWithoutServerInputObjectSchema).array(), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => ChannelCategoryCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCategoryCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema), z.lazy(() => ChannelCategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelCategoryUncheckedCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelCategoryUncheckedCreateNestedManyWithoutServerInput>;
export const ChannelCategoryUncheckedCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
