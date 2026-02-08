import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutServerInputObjectSchema as MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema as MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';
import { MemberCreateOrConnectWithoutServerInputObjectSchema as MemberCreateOrConnectWithoutServerInputObjectSchema } from './MemberCreateOrConnectWithoutServerInput.schema';
import { MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema as MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutServerInput.schema';
import { MemberCreateManyServerInputEnvelopeObjectSchema as MemberCreateManyServerInputEnvelopeObjectSchema } from './MemberCreateManyServerInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema as MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutServerInput.schema';
import { MemberUpdateManyWithWhereWithoutServerInputObjectSchema as MemberUpdateManyWithWhereWithoutServerInputObjectSchema } from './MemberUpdateManyWithWhereWithoutServerInput.schema';
import { MemberScalarWhereInputObjectSchema as MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutServerInputObjectSchema), z.lazy(() => MemberCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MemberCreateManyServerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema), z.lazy(() => MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MemberUpdateManyWithWhereWithoutServerInputObjectSchema), z.lazy(() => MemberUpdateManyWithWhereWithoutServerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MemberScalarWhereInputObjectSchema), z.lazy(() => MemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MemberUpdateManyWithoutServerNestedInputObjectSchema: z.ZodType<Prisma.MemberUpdateManyWithoutServerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateManyWithoutServerNestedInput>;
export const MemberUpdateManyWithoutServerNestedInputObjectZodSchema = makeSchema();
