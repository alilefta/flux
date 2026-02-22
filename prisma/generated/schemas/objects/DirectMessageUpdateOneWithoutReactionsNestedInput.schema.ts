import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutReactionsInputObjectSchema as DirectMessageCreateWithoutReactionsInputObjectSchema } from './DirectMessageCreateWithoutReactionsInput.schema';
import { DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema as DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReactionsInput.schema';
import { DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema as DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema } from './DirectMessageCreateOrConnectWithoutReactionsInput.schema';
import { DirectMessageUpsertWithoutReactionsInputObjectSchema as DirectMessageUpsertWithoutReactionsInputObjectSchema } from './DirectMessageUpsertWithoutReactionsInput.schema';
import { DirectMessageWhereInputObjectSchema as DirectMessageWhereInputObjectSchema } from './DirectMessageWhereInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema as DirectMessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema } from './DirectMessageUpdateToOneWithWhereWithoutReactionsInput.schema';
import { DirectMessageUpdateWithoutReactionsInputObjectSchema as DirectMessageUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUpdateWithoutReactionsInput.schema';
import { DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema as DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => DirectMessageUpsertWithoutReactionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DirectMessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutReactionsInputObjectSchema)]).optional()
}).strict();
export const DirectMessageUpdateOneWithoutReactionsNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateOneWithoutReactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateOneWithoutReactionsNestedInput>;
export const DirectMessageUpdateOneWithoutReactionsNestedInputObjectZodSchema = makeSchema();
