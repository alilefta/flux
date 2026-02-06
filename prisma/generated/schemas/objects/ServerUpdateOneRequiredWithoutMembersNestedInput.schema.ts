import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutMembersInputObjectSchema as ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema as ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema';
import { ServerCreateOrConnectWithoutMembersInputObjectSchema as ServerCreateOrConnectWithoutMembersInputObjectSchema } from './ServerCreateOrConnectWithoutMembersInput.schema';
import { ServerUpsertWithoutMembersInputObjectSchema as ServerUpsertWithoutMembersInputObjectSchema } from './ServerUpsertWithoutMembersInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateToOneWithWhereWithoutMembersInputObjectSchema as ServerUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './ServerUpdateToOneWithWhereWithoutMembersInput.schema';
import { ServerUpdateWithoutMembersInputObjectSchema as ServerUpdateWithoutMembersInputObjectSchema } from './ServerUpdateWithoutMembersInput.schema';
import { ServerUncheckedUpdateWithoutMembersInputObjectSchema as ServerUncheckedUpdateWithoutMembersInputObjectSchema } from './ServerUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  upsert: z.lazy(() => ServerUpsertWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ServerUpdateToOneWithWhereWithoutMembersInputObjectSchema), z.lazy(() => ServerUpdateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutMembersInputObjectSchema)]).optional()
}).strict();
export const ServerUpdateOneRequiredWithoutMembersNestedInputObjectSchema: z.ZodType<Prisma.ServerUpdateOneRequiredWithoutMembersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateOneRequiredWithoutMembersNestedInput>;
export const ServerUpdateOneRequiredWithoutMembersNestedInputObjectZodSchema = makeSchema();
