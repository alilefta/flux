import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutChannelsInputObjectSchema as ServerCreateWithoutChannelsInputObjectSchema } from './ServerCreateWithoutChannelsInput.schema';
import { ServerUncheckedCreateWithoutChannelsInputObjectSchema as ServerUncheckedCreateWithoutChannelsInputObjectSchema } from './ServerUncheckedCreateWithoutChannelsInput.schema';
import { ServerCreateOrConnectWithoutChannelsInputObjectSchema as ServerCreateOrConnectWithoutChannelsInputObjectSchema } from './ServerCreateOrConnectWithoutChannelsInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutChannelsInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutChannelsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutChannelsInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerCreateNestedOneWithoutChannelsInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutChannelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateNestedOneWithoutChannelsInput>;
export const ServerCreateNestedOneWithoutChannelsInputObjectZodSchema = makeSchema();
