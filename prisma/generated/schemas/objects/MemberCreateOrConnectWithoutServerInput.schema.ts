import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutServerInputObjectSchema as MemberCreateWithoutServerInputObjectSchema } from './MemberCreateWithoutServerInput.schema';
import { MemberUncheckedCreateWithoutServerInputObjectSchema as MemberUncheckedCreateWithoutServerInputObjectSchema } from './MemberUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MemberCreateWithoutServerInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MemberCreateOrConnectWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateOrConnectWithoutServerInput>;
export const MemberCreateOrConnectWithoutServerInputObjectZodSchema = makeSchema();
