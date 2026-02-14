import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerUpdateWithoutCategoriesInputObjectSchema as ServerUpdateWithoutCategoriesInputObjectSchema } from './ServerUpdateWithoutCategoriesInput.schema';
import { ServerUncheckedUpdateWithoutCategoriesInputObjectSchema as ServerUncheckedUpdateWithoutCategoriesInputObjectSchema } from './ServerUncheckedUpdateWithoutCategoriesInput.schema';
import { ServerCreateWithoutCategoriesInputObjectSchema as ServerCreateWithoutCategoriesInputObjectSchema } from './ServerCreateWithoutCategoriesInput.schema';
import { ServerUncheckedCreateWithoutCategoriesInputObjectSchema as ServerUncheckedCreateWithoutCategoriesInputObjectSchema } from './ServerUncheckedCreateWithoutCategoriesInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutCategoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutCategoriesInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutCategoriesInput>;
export const ServerUpsertWithoutCategoriesInputObjectZodSchema = makeSchema();
