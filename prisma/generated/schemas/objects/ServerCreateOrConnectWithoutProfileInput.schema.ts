import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutProfileInputObjectSchema as ServerCreateWithoutProfileInputObjectSchema } from './ServerCreateWithoutProfileInput.schema';
import { ServerUncheckedCreateWithoutProfileInputObjectSchema as ServerUncheckedCreateWithoutProfileInputObjectSchema } from './ServerUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutProfileInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutProfileInput>;
export const ServerCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
