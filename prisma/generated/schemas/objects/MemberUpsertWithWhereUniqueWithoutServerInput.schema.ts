import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutServerInputObjectSchema as MemberUpdateWithoutServerInputObjectSchema } from './MemberUpdateWithoutServerInput.schema';
import { MemberUncheckedUpdateWithoutServerInputObjectSchema as MemberUncheckedUpdateWithoutServerInputObjectSchema } from './MemberUncheckedUpdateWithoutServerInput.schema';
import { MemberCreateWithoutServerInputObjectSchema as MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema as MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MemberUpdateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MemberCreateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MemberUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutServerInput>;
export const MemberUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
