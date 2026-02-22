import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutReactionsInputObjectSchema as DirectMessageCreateWithoutReactionsInputObjectSchema } from './DirectMessageCreateWithoutReactionsInput.schema';
import { DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema as DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReactionsInput.schema';
import { DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema as DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema } from './DirectMessageCreateOrConnectWithoutReactionsInput.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  connect: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedOneWithoutReactionsInput>;
export const DirectMessageCreateNestedOneWithoutReactionsInputObjectZodSchema = makeSchema();
