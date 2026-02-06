import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerCreateWithoutMembersInputObjectSchema as ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema as ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema';
import { ServerCreateOrConnectWithoutMembersInputObjectSchema as ServerCreateOrConnectWithoutMembersInputObjectSchema } from './ServerCreateOrConnectWithoutMembersInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ServerCreateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutMembersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutMembersInputObjectSchema).optional(),
  connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerCreateNestedOneWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerCreateNestedOneWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateNestedOneWithoutMembersInput>;
export const ServerCreateNestedOneWithoutMembersInputObjectZodSchema = makeSchema();
