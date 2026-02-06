import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutProfileInputObjectSchema as ServerCreateWithoutProfileInputObjectSchema } from './ServerCreateWithoutProfileInput.schema';
import { ServerUncheckedCreateWithoutProfileInputObjectSchema as ServerUncheckedCreateWithoutProfileInputObjectSchema } from './ServerUncheckedCreateWithoutProfileInput.schema';
import { ServerCreateOrConnectWithoutProfileInputObjectSchema as ServerCreateOrConnectWithoutProfileInputObjectSchema } from './ServerCreateOrConnectWithoutProfileInput.schema';
import { ServerCreateManyProfileInputEnvelopeObjectSchema as ServerCreateManyProfileInputEnvelopeObjectSchema } from './ServerCreateManyProfileInputEnvelope.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ServerCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => ServerCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ServerCreateManyProfileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ServerWhereUniqueInputObjectSchema), z.lazy(() => ServerWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ServerUncheckedCreateNestedManyWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUncheckedCreateNestedManyWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUncheckedCreateNestedManyWithoutProfileInput>;
export const ServerUncheckedCreateNestedManyWithoutProfileInputObjectZodSchema = makeSchema();
