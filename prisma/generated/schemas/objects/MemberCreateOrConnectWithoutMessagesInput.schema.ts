import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema';
import { MemberCreateWithoutMessagesInputObjectSchema as MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema as MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema)])
}).strict();
export const MemberCreateOrConnectWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberCreateOrConnectWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateOrConnectWithoutMessagesInput>;
export const MemberCreateOrConnectWithoutMessagesInputObjectZodSchema = makeSchema();
