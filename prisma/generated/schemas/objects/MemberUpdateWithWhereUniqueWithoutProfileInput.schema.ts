import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberUpdateWithoutProfileInputObjectSchema as MemberUpdateWithoutProfileInputObjectSchema } from './MemberUpdateWithoutProfileInput.schema';
import { MemberUncheckedUpdateWithoutProfileInputObjectSchema as MemberUncheckedUpdateWithoutProfileInputObjectSchema } from './MemberUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MemberUpdateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const MemberUpdateWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateWithWhereUniqueWithoutProfileInput>;
export const MemberUpdateWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
