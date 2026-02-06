import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberCreateWithoutMessagesInputObjectSchema as MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema as MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';
import { MemberCreateOrConnectWithoutMessagesInputObjectSchema as MemberCreateOrConnectWithoutMessagesInputObjectSchema } from './MemberCreateOrConnectWithoutMessagesInput.schema';
import { MemberWhereUniqueInputObjectSchema as MemberWhereUniqueInputObjectSchema } from './MemberWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MemberCreateOrConnectWithoutMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => MemberWhereUniqueInputObjectSchema).optional()
}).strict();
export const MemberCreateNestedOneWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberCreateNestedOneWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberCreateNestedOneWithoutMessagesInput>;
export const MemberCreateNestedOneWithoutMessagesInputObjectZodSchema = makeSchema();
