import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutChannelsInputObjectSchema as ServerUpdateWithoutChannelsInputObjectSchema } from './ServerUpdateWithoutChannelsInput.schema';
import { ServerUncheckedUpdateWithoutChannelsInputObjectSchema as ServerUncheckedUpdateWithoutChannelsInputObjectSchema } from './ServerUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutChannelsInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutChannelsInput>;
export const ServerUpdateToOneWithWhereWithoutChannelsInputObjectZodSchema = makeSchema();
