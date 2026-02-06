import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutProfileInputObjectSchema as MemberUpdateWithoutProfileInputObjectSchema } from './MemberUpdateWithoutProfileInput.schema';
import { MemberUncheckedUpdateWithoutProfileInputObjectSchema as MemberUncheckedUpdateWithoutProfileInputObjectSchema } from './MemberUncheckedUpdateWithoutProfileInput.schema';
import { MemberCreateWithoutProfileInputObjectSchema as MemberCreateWithoutProfileInputObjectSchema } from './MemberCreateWithoutProfileInput.schema';
import { MemberUncheckedCreateWithoutProfileInputObjectSchema as MemberUncheckedCreateWithoutProfileInputObjectSchema } from './MemberUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MemberUpdateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => MemberCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const MemberUpsertWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpsertWithWhereUniqueWithoutProfileInput>;
export const MemberUpsertWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
