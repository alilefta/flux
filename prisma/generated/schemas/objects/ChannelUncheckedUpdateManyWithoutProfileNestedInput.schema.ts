import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ChannelCreateWithoutProfileInputObjectSchema as ChannelCreateWithoutProfileInputObjectSchema } from './ChannelCreateWithoutProfileInput.schema';
import { ChannelUncheckedCreateWithoutProfileInputObjectSchema as ChannelUncheckedCreateWithoutProfileInputObjectSchema } from './ChannelUncheckedCreateWithoutProfileInput.schema';
import { ChannelCreateOrConnectWithoutProfileInputObjectSchema as ChannelCreateOrConnectWithoutProfileInputObjectSchema } from './ChannelCreateOrConnectWithoutProfileInput.schema';
import { ChannelUpsertWithWhereUniqueWithoutProfileInputObjectSchema as ChannelUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './ChannelUpsertWithWhereUniqueWithoutProfileInput.schema';
import { ChannelCreateManyProfileInputEnvelopeObjectSchema as ChannelCreateManyProfileInputEnvelopeObjectSchema } from './ChannelCreateManyProfileInputEnvelope.schema';
import { ChannelWhereUniqueInputObjectSchema as ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';
import { ChannelUpdateWithWhereUniqueWithoutProfileInputObjectSchema as ChannelUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './ChannelUpdateWithWhereUniqueWithoutProfileInput.schema';
import { ChannelUpdateManyWithWhereWithoutProfileInputObjectSchema as ChannelUpdateManyWithWhereWithoutProfileInputObjectSchema } from './ChannelUpdateManyWithWhereWithoutProfileInput.schema';
import { ChannelScalarWhereInputObjectSchema as ChannelScalarWhereInputObjectSchema } from './ChannelScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ChannelUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChannelCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ChannelCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChannelUpsertWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ChannelUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChannelCreateManyProfileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChannelWhereUniqueInputObjectSchema), z.lazy(() => ChannelWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChannelUpdateWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ChannelUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChannelUpdateManyWithWhereWithoutProfileInputObjectSchema), z.lazy(() => ChannelUpdateManyWithWhereWithoutProfileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChannelScalarWhereInputObjectSchema), z.lazy(() => ChannelScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChannelUncheckedUpdateManyWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChannelUncheckedUpdateManyWithoutProfileNestedInput>;
export const ChannelUncheckedUpdateManyWithoutProfileNestedInputObjectZodSchema = makeSchema();
