import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageUpdateWithoutReactionsInputObjectSchema as MessageUpdateWithoutReactionsInputObjectSchema } from './MessageUpdateWithoutReactionsInput.schema';
import { MessageUncheckedUpdateWithoutReactionsInputObjectSchema as MessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './MessageUncheckedUpdateWithoutReactionsInput.schema';
import { MessageCreateWithoutReactionsInputObjectSchema as MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema as MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReactionsInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)]),
  where: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const MessageUpsertWithoutReactionsInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithoutReactionsInput>;
export const MessageUpsertWithoutReactionsInputObjectZodSchema = makeSchema();
