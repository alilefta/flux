import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberUpdateWithoutMessagesInputObjectSchema as MemberUpdateWithoutMessagesInputObjectSchema } from './MemberUpdateWithoutMessagesInput.schema';
import { MemberUncheckedUpdateWithoutMessagesInputObjectSchema as MemberUncheckedUpdateWithoutMessagesInputObjectSchema } from './MemberUncheckedUpdateWithoutMessagesInput.schema';
import { MemberCreateWithoutMessagesInputObjectSchema as MemberCreateWithoutMessagesInputObjectSchema } from './MemberCreateWithoutMessagesInput.schema';
import { MemberUncheckedCreateWithoutMessagesInputObjectSchema as MemberUncheckedCreateWithoutMessagesInputObjectSchema } from './MemberUncheckedCreateWithoutMessagesInput.schema';
import { MemberWhereInputObjectSchema as MemberWhereInputObjectSchema } from './MemberWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MemberUpdateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => MemberCreateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedCreateWithoutMessagesInputObjectSchema)]),
  where: z.lazy(() => MemberWhereInputObjectSchema).optional()
}).strict();
export const MemberUpsertWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberUpsertWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpsertWithoutMessagesInput>;
export const MemberUpsertWithoutMessagesInputObjectZodSchema = makeSchema();
