import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutServerInputObjectSchema as MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema as MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema';
import { MemberCreateOrConnectWithoutServerInputObjectSchema as MemberCreateOrConnectWithoutServerInputObjectSchema } from './MemberCreateOrConnectWithoutServerInput.schema';
import { MemberCreateManyServerInputEnvelopeObjectSchema as MemberCreateManyServerInputEnvelopeObjectSchema } from './MemberCreateManyServerInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutServerInputObjectSchema), z.lazy(() => MemberCreateWithoutServerInputObjectSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema), z.lazy(() => MemberCreateOrConnectWithoutServerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MemberCreateManyServerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MemberCreateNestedManyWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateNestedManyWithoutServerInput>;
export const MemberCreateNestedManyWithoutServerInputObjectZodSchema = makeSchema();
