import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageUpdateWithoutReactionsInputObjectSchema as DirectMessageUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUpdateWithoutReactionsInput.schema';
import { DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema as DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema)])
}).strict();
export const DirectMessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateToOneWithWhereWithoutReactionsInput>;
export const DirectMessageUpdateToOneWithWhereWithoutReactionsInputObjectZodSchema = makeSchema();
