import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutProfileInputObjectSchema as ServerUpdateWithoutProfileInputObjectSchema } from './ServerUpdateWithoutProfileInput.schema';
import { ServerUncheckedUpdateWithoutProfileInputObjectSchema as ServerUncheckedUpdateWithoutProfileInputObjectSchema } from './ServerUncheckedUpdateWithoutProfileInput.schema';
import { ServerCreateWithoutProfileInputObjectSchema as ServerCreateWithoutProfileInputObjectSchema } from './ServerCreateWithoutProfileInput.schema';
import { ServerUncheckedCreateWithoutProfileInputObjectSchema as ServerUncheckedCreateWithoutProfileInputObjectSchema } from './ServerUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ServerUpdateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ServerUpsertWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithWhereUniqueWithoutProfileInput>;
export const ServerUpsertWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
