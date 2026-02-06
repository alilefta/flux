import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema';
import { DirectMessageUpdateManyMutationInputObjectSchema as DirectMessageUpdateManyMutationInputObjectSchema } from './DirectMessageUpdateManyMutationInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutMemberInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutMemberInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutMemberInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateManyMutationInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateManyWithoutMemberInputObjectSchema)])
}).strict();
export const DirectMessageUpdateManyWithWhereWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutMemberInput>;
export const DirectMessageUpdateManyWithWhereWithoutMemberInputObjectZodSchema = makeSchema();
