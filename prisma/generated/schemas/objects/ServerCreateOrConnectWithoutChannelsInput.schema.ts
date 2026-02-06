import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutChannelsInputObjectSchema as ServerCreateWithoutChannelsInputObjectSchema } from './ServerCreateWithoutChannelsInput.schema';
import { ServerUncheckedCreateWithoutChannelsInputObjectSchema as ServerUncheckedCreateWithoutChannelsInputObjectSchema } from './ServerUncheckedCreateWithoutChannelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutChannelsInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutChannelsInput>;
export const ServerCreateOrConnectWithoutChannelsInputObjectZodSchema = makeSchema();
