import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutCategoriesInputObjectSchema as ServerCreateWithoutCategoriesInputObjectSchema } from './ServerCreateWithoutCategoriesInput.schema';
import { ServerUncheckedCreateWithoutCategoriesInputObjectSchema as ServerUncheckedCreateWithoutCategoriesInputObjectSchema } from './ServerUncheckedCreateWithoutCategoriesInput.schema';
import { ServerCreateOrConnectWithoutCategoriesInputObjectSchema as ServerCreateOrConnectWithoutCategoriesInputObjectSchema } from './ServerCreateOrConnectWithoutCategoriesInput.schema';
import { ServerUpsertWithoutCategoriesInputObjectSchema as ServerUpsertWithoutCategoriesInputObjectSchema } from './ServerUpsertWithoutCategoriesInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutCategoriesInputObjectSchema as ServerUpdateToOneWithWhereWithoutCategoriesInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutCategoriesInput.schema';
import { ServerUpdateWithoutCategoriesInputObjectSchema as ServerUpdateWithoutCategoriesInputObjectSchema } from './ServerUpdateWithoutCategoriesInput.schema';
import { ServerUncheckedUpdateWithoutCategoriesInputObjectSchema as ServerUncheckedUpdateWithoutCategoriesInputObjectSchema } from './ServerUncheckedUpdateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutCategoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutCategoriesInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutCategoriesInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutCategoriesInputObjectSchema)]).optional()
}).strict();
export const ServerUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutCategoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateOneRequiredWithoutCategoriesNestedInput>;
export const ServerUpdateOneRequiredWithoutCategoriesNestedInputObjectZodSchema = makeSchema();
