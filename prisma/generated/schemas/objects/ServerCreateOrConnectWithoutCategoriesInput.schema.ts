import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutCategoriesInputObjectSchema as ServerCreateWithoutCategoriesInputObjectSchema } from './ServerCreateWithoutCategoriesInput.schema';
import { ServerUncheckedCreateWithoutCategoriesInputObjectSchema as ServerUncheckedCreateWithoutCategoriesInputObjectSchema } from './ServerUncheckedCreateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutCategoriesInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutCategoriesInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutCategoriesInput>;
export const ServerCreateOrConnectWithoutCategoriesInputObjectZodSchema = makeSchema();
