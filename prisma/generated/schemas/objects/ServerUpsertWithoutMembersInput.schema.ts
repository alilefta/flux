import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerUpdateWithoutMembersInputObjectSchema as ServerUpdateWithoutMembersInputObjectSchema } from './ServerUpdateWithoutMembersInput.schema';
import { ServerUncheckedUpdateWithoutMembersInputObjectSchema as ServerUncheckedUpdateWithoutMembersInputObjectSchema } from './ServerUncheckedUpdateWithoutMembersInput.schema';
import { ServerCreateWithoutMembersInputObjectSchema as ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema as ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ServerUpdateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutMembersInputObjectSchema)]),
  create: z.union([z.lazy(() => ServerCreateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutMembersInputObjectSchema)]),
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerUpsertWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerUpsertWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpsertWithoutMembersInput>;
export const ServerUpsertWithoutMembersInputObjectZodSchema = makeSchema();
