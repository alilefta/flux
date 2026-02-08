import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutProfileInputObjectSchema as MemberCreateWithoutProfileInputObjectSchema } from './MemberCreateWithoutProfileInput.schema';
import { MemberUncheckedCreateWithoutProfileInputObjectSchema as MemberUncheckedCreateWithoutProfileInputObjectSchema } from './MemberUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MemberCreateWithoutProfileInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const MemberCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateOrConnectWithoutProfileInput>;
export const MemberCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
