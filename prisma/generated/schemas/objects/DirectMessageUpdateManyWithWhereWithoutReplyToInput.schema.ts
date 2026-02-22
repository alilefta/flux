import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema';
import { DirectMessageUpdateManyMutationInputObjectSchema as DirectMessageUpdateManyMutationInputObjectSchema } from './DirectMessageUpdateManyMutationInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutReplyToInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateManyMutationInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateManyWithoutReplyToInputObjectSchema)])
}).strict();
export const DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutReplyToInput>;
export const DirectMessageUpdateManyWithWhereWithoutReplyToInputObjectZodSchema = makeSchema();
