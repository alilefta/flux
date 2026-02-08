import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutProfileInputObjectSchema as ServerUpdateWithoutProfileInputObjectSchema } from './ServerUpdateWithoutProfileInput.schema';
import { ServerUncheckedUpdateWithoutProfileInputObjectSchema as ServerUncheckedUpdateWithoutProfileInputObjectSchema } from './ServerUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ServerUpdateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const ServerUpdateWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateWithWhereUniqueWithoutProfileInput>;
export const ServerUpdateWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
