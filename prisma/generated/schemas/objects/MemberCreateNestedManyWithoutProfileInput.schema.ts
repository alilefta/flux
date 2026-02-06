import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutProfileInputObjectSchema as MemberCreateWithoutProfileInputObjectSchema } from './MemberCreateWithoutProfileInput.schema';
import { MemberUncheckedCreateWithoutProfileInputObjectSchema as MemberUncheckedCreateWithoutProfileInputObjectSchema } from './MemberUncheckedCreateWithoutProfileInput.schema';
import { MemberCreateOrConnectWithoutProfileInputObjectSchema as MemberCreateOrConnectWithoutProfileInputObjectSchema } from './MemberCreateOrConnectWithoutProfileInput.schema';
import { MemberCreateManyProfileInputEnvelopeObjectSchema as MemberCreateManyProfileInputEnvelopeObjectSchema } from './MemberCreateManyProfileInputEnvelope.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MemberCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => MemberCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MemberCreateManyProfileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MemberWhereUniqueInputObjectSchema), z.lazy(() => MemberWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MemberCreateNestedManyWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberCreateNestedManyWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateNestedManyWithoutProfileInput>;
export const MemberCreateNestedManyWithoutProfileInputObjectZodSchema = makeSchema();
