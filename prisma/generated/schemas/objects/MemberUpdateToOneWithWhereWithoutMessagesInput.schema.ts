import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberWhereInputObjectSchema as MemberWhereInputObjectSchema } from './MemberWhereInput.schema';
import { MemberUpdateWithoutMessagesInputObjectSchema as MemberUpdateWithoutMessagesInputObjectSchema } from './MemberUpdateWithoutMessagesInput.schema';
import { MemberUncheckedUpdateWithoutMessagesInputObjectSchema as MemberUncheckedUpdateWithoutMessagesInputObjectSchema } from './MemberUncheckedUpdateWithoutMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MemberUpdateWithoutMessagesInputObjectSchema), z.lazy(() => MemberUncheckedUpdateWithoutMessagesInputObjectSchema)])
}).strict();
export const MemberUpdateToOneWithWhereWithoutMessagesInputObjectSchema: z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateToOneWithWhereWithoutMessagesInput>;
export const MemberUpdateToOneWithWhereWithoutMessagesInputObjectZodSchema = makeSchema();
