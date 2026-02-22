import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutReactionsInputObjectSchema as DirectMessageCreateWithoutReactionsInputObjectSchema } from './DirectMessageCreateWithoutReactionsInput.schema';
import { DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema as DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReactionsInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutReactionsInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutReactionsInput>;
export const DirectMessageCreateOrConnectWithoutReactionsInputObjectZodSchema = makeSchema();
