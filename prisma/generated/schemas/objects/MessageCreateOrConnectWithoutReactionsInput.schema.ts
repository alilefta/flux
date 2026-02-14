import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutReactionsInputObjectSchema as MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema as MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutReactionsInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutReactionsInput>;
export const MessageCreateOrConnectWithoutReactionsInputObjectZodSchema = makeSchema();
