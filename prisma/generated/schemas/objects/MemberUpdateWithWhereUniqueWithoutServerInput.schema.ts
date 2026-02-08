import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutServerInputObjectSchema as MemberUpdateWithoutServerInputObjectSchema } from './MemberUpdateWithoutServerInput.schema';
import { MemberUncheckedUpdateWithoutServerInputObjectSchema as MemberUncheckedUpdateWithoutServerInputObjectSchema } from './MemberUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MemberUpdateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const MemberUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutServerInput>;
export const MemberUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
