import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutCategoriesInputObjectSchema as ServerUpdateWithoutCategoriesInputObjectSchema } from './ServerUpdateWithoutCategoriesInput.schema';
import { ServerUncheckedUpdateWithoutCategoriesInputObjectSchema as ServerUncheckedUpdateWithoutCategoriesInputObjectSchema } from './ServerUncheckedUpdateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutCategoriesInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutCategoriesInput>;
export const ServerUpdateToOneWithWhereWithoutCategoriesInputObjectZodSchema = makeSchema();
