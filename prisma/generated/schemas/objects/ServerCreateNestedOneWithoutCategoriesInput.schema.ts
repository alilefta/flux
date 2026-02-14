import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutCategoriesInputObjectSchema as ServerCreateWithoutCategoriesInputObjectSchema } from './ServerCreateWithoutCategoriesInput.schema';
import { ServerUncheckedCreateWithoutCategoriesInputObjectSchema as ServerUncheckedCreateWithoutCategoriesInputObjectSchema } from './ServerUncheckedCreateWithoutCategoriesInput.schema';
import { ServerCreateOrConnectWithoutCategoriesInputObjectSchema as ServerCreateOrConnectWithoutCategoriesInputObjectSchema } from './ServerCreateOrConnectWithoutCategoriesInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutCategoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutCategoriesInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerCreateNestedOneWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateNestedOneWithoutCategoriesInput>;
export const ServerCreateNestedOneWithoutCategoriesInputObjectZodSchema = makeSchema();
