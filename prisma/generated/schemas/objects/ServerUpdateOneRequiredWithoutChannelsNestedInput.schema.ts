import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutChannelsInputObjectSchema as ServerCreateWithoutChannelsInputObjectSchema } from './ServerCreateWithoutChannelsInput.schema';
import { ServerUncheckedCreateWithoutChannelsInputObjectSchema as ServerUncheckedCreateWithoutChannelsInputObjectSchema } from './ServerUncheckedCreateWithoutChannelsInput.schema';
import { ServerCreateOrConnectWithoutChannelsInputObjectSchema as ServerCreateOrConnectWithoutChannelsInputObjectSchema } from './ServerCreateOrConnectWithoutChannelsInput.schema';
import { ServerUpsertWithoutChannelsInputObjectSchema as ServerUpsertWithoutChannelsInputObjectSchema } from './ServerUpsertWithoutChannelsInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutChannelsInputObjectSchema as ServerUpdateToOneWithWhereWithoutChannelsInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutChannelsInput.schema';
import { ServerUpdateWithoutChannelsInputObjectSchema as ServerUpdateWithoutChannelsInputObjectSchema } from './ServerUpdateWithoutChannelsInput.schema';
import { ServerUncheckedUpdateWithoutChannelsInputObjectSchema as ServerUncheckedUpdateWithoutChannelsInputObjectSchema } from './ServerUncheckedUpdateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutChannelsInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutChannelsInputObjectSchema), z.lazy(() => ServerUpdateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutChannelsInputObjectSchema)]).optional()
}).strict();
export const ServerUpdateOneRequiredWithoutChannelsNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutChannelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateOneRequiredWithoutChannelsNestedInput>;
export const ServerUpdateOneRequiredWithoutChannelsNestedInputObjectZodSchema = makeSchema();
