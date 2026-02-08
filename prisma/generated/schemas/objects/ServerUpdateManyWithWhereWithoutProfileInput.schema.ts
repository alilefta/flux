import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ServerScalarWhereInputObjectSchema as ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './ServerUpdateManyMutationInput.schema';
import { ServerUncheckedUpdateManyWithoutProfileInputObjectSchema as ServerUncheckedUpdateManyWithoutProfileInputObjectSchema } from './ServerUncheckedUpdateManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ServerUpdateManyMutationInputObjectSchema), z.lazy(() => ServerUncheckedUpdateManyWithoutProfileInputObjectSchema)])
}).strict();
export const ServerUpdateManyWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.ServerUpdateManyWithWhereWithoutProfileInput>;
export const ServerUpdateManyWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
