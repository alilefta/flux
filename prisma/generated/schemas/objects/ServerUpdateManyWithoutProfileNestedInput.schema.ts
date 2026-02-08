import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutProfileInputObjectSchema as ServerCreateWithoutProfileInputObjectSchema } from './ServerCreateWithoutProfileInput.schema';
import { ServerUncheckedCreateWithoutProfileInputObjectSchema as ServerUncheckedCreateWithoutProfileInputObjectSchema } from './ServerUncheckedCreateWithoutProfileInput.schema';
import { ServerCreateOrConnectWithoutProfileInputObjectSchema as ServerCreateOrConnectWithoutProfileInputObjectSchema } from './ServerCreateOrConnectWithoutProfileInput.schema';
import { ServerUpsertWithWhereUniqueWithoutProfileInputObjectSchema as ServerUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './ServerUpsertWithWhereUniqueWithoutProfileInput.schema';
import { ServerCreateManyProfileInputEnvelopeObjectSchema as ServerCreateManyProfileInputEnvelopeObjectSchema } from './ServerCreateManyProfileInputEnvelope.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithWhereUniqueWithoutProfileInputObjectSchema as ServerUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './ServerUpdateWithWhereUniqueWithoutProfileInput.schema';
import { ServerUpdateManyWithWhereWithoutProfileInputObjectSchema as ServerUpdateManyWithWhereWithoutProfileInputObjectSchema } from './ServerUpdateManyWithWhereWithoutProfileInput.schema';
import { ServerScalarWhereInputObjectSchema as ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServerCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ServerCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ServerUpsertWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ServerUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServerCreateManyProfileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ServerUpdateWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => ServerUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ServerUpdateManyWithWhereWithoutProfileInputObjectSchema), z.lazy(() => ServerUpdateManyWithWhereWithoutProfileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ServerScalarWhereInputObjectSchema), z.lazy(() => ServerScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ServerUpdateManyWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateManyWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateManyWithoutProfileNestedInput>;
export const ServerUpdateManyWithoutProfileNestedInputObjectZodSchema = makeSchema();
