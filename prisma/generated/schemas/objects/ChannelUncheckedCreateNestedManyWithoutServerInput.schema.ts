import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutServerInputObjectSchema as ChannelCreateWithoutServerInputObjectSchema } from './ChannelCreateWithoutServerInput.schema';
import { ChannelUncheckedCreateWithoutServerInputObjectSchema as ChannelUncheckedCreateWithoutServerInputObjectSchema } from './ChannelUncheckedCreateWithoutServerInput.schema';
import { ChannelCreateOrConnectWithoutServerInputObjectSchema as ChannelCreateOrConnectWithoutServerInputObjectSchema } from './ChannelCreateOrConnectWithoutServerInput.schema';
import { ChannelCreateManyServerInputEnvelopeObjectSchema as ChannelCreateManyServerInputEnvelopeObjectSchema } from './ChannelCreateManyServerInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelCreateWithoutServerInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChannelUncheckedCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUncheckedCreateNestedManyWithoutServerInput>;
export const ChannelUncheckedCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
