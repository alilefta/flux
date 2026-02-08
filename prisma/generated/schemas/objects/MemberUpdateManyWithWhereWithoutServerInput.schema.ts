import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberScalarWhereInputObjectSchema as MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';
import { MemberUpdateManyMutationInputObjectSchema as MemberUpdateManyMutationInputObjectSchema } from './MemberUpdateManyMutationInput.schema';
import { MemberUncheckedUpdateManyWithoutServerInputObjectSchema as MemberUncheckedUpdateManyWithoutServerInputObjectSchema } from './MemberUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MemberUpdateManyMutationInputObjectSchema), z.lazy(() => MemberUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const MemberUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutServerInput>;
export const MemberUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
