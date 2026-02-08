import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutProfileInputObjectSchema as MemberCreateWithoutProfileInputObjectSchema } from './MemberCreateWithoutProfileInput.schema';
import { MemberUncheckedCreateWithoutProfileInputObjectSchema as MemberUncheckedCreateWithoutProfileInputObjectSchema } from './MemberUncheckedCreateWithoutProfileInput.schema';
import { MemberCreateOrConnectWithoutProfileInputObjectSchema as MemberCreateOrConnectWithoutProfileInputObjectSchema } from './MemberCreateOrConnectWithoutProfileInput.schema';
import { MemberUpsertWithWhereUniqueWithoutProfileInputObjectSchema as MemberUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './MemberUpsertWithWhereUniqueWithoutProfileInput.schema';
import { MemberCreateManyProfileInputEnvelopeObjectSchema as MemberCreateManyProfileInputEnvelopeObjectSchema } from './MemberCreateManyProfileInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithWhereUniqueWithoutProfileInputObjectSchema as MemberUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './MemberUpdateWithWhereUniqueWithoutProfileInput.schema';
import { MemberUpdateManyWithWhereWithoutProfileInputObjectSchema as MemberUpdateManyWithWhereWithoutProfileInputObjectSchema } from './MemberUpdateManyWithWhereWithoutProfileInput.schema';
import { MemberScalarWhereInputObjectSchema as MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MemberCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => MemberCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MemberUpsertWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => MemberUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MemberCreateManyProfileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MemberUpdateWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => MemberUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MemberUpdateManyWithWhereWithoutProfileInputObjectSchema), z.lazy(() => MemberUpdateManyWithWhereWithoutProfileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MemberScalarWhereInputObjectSchema), z.lazy(() => MemberScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MemberUncheckedUpdateManyWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUncheckedUpdateManyWithoutProfileNestedInput>;
export const MemberUncheckedUpdateManyWithoutProfileNestedInputObjectZodSchema = makeSchema();
