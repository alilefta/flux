import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutMembersInputObjectSchema as ServerCreateWithoutMembersInputObjectSchema } from './ServerCreateWithoutMembersInput.schema';
import { ServerUncheckedCreateWithoutMembersInputObjectSchema as ServerUncheckedCreateWithoutMembersInputObjectSchema } from './ServerUncheckedCreateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ServerCreateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutMembersInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerCreateOrConnectWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerCreateOrConnectWithoutMembersInput>;
export const ServerCreateOrConnectWithoutMembersInputObjectZodSchema = makeSchema();
