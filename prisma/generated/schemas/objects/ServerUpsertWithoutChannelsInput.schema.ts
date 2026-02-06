import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerUpdateWithoutChannelsInputObjectSchema as ServerUpdateWithoutChannelsInputObjectSchema } from './ServerUpdateWithoutChannelsInput.schema';
import { ServerUncheckedUpdateWithoutChannelsInputObjectSchema as ServerUncheckedUpdateWithoutChannelsInputObjectSchema } from './ServerUncheckedUpdateWithoutChannelsInput.schema';
import { ServerCreateWithoutChannelsInputObjectSchema as ServerCreateWithoutChannelsInputObjectSchema } from './ServerCreateWithoutChannelsInput.schema';
import { ServerUncheckedCreateWithoutChannelsInputObjectSchema as ServerUncheckedCreateWithoutChannelsInputObjectSchema } from './ServerUncheckedCreateWithoutChannelsInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutChannelsInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutChannelsInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutChannelsInput>;
export const ServerUpsertWithoutChannelsInputObjectZodSchema = makeSchema();
