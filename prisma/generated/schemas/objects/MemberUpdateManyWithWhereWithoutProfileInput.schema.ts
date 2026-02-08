import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MemberScalarWhereInputObjectSchema as MemberScalarWhereInputObjectSchema } from './MemberScalarWhereInput.schema';
import { MemberUpdateManyMutationInputObjectSchema as MemberUpdateManyMutationInputObjectSchema } from './MemberUpdateManyMutationInput.schema';
import { MemberUncheckedUpdateManyWithoutProfileInputObjectSchema as MemberUncheckedUpdateManyWithoutProfileInputObjectSchema } from './MemberUncheckedUpdateManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MemberScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MemberUpdateManyMutationInputObjectSchema), z.lazy(() => MemberUncheckedUpdateManyWithoutProfileInputObjectSchema)])
}).strict();
export const MemberUpdateManyWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MemberUpdateManyWithWhereWithoutProfileInput>;
export const MemberUpdateManyWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
