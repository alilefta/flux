import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutMembersInputObjectSchema as ServerUpdateWithoutMembersInputObjectSchema } from './ServerUpdateWithoutMembersInput.schema';
import { ServerUncheckedUpdateWithoutMembersInputObjectSchema as ServerUncheckedUpdateWithoutMembersInputObjectSchema } from './ServerUncheckedUpdateWithoutMembersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ServerUpdateWithoutMembersInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutMembersInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutMembersInputObjectSchema: z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateToOneWithWhereWithoutMembersInput>;
export const ServerUpdateToOneWithWhereWithoutMembersInputObjectZodSchema = makeSchema();
