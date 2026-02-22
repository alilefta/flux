import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUpdateWithoutReactionsInputObjectSchema as DirectMessageUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUpdateWithoutReactionsInput.schema';
import { DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema as DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutReactionsInput.schema';
import { DirectMessageCreateWithoutReactionsInputObjectSchema as DirectMessageCreateWithoutReactionsInputObjectSchema } from './DirectMessageCreateWithoutReactionsInput.schema';
import { DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema as DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReactionsInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema)]),
  where: z.lazy(() => DirectMessageWhereInputObjectSchema).optional()
}).strict();
export const DirectMessageUpsertWithoutReactionsInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithoutReactionsInput>;
export const DirectMessageUpsertWithoutReactionsInputObjectZodSchema = makeSchema();
