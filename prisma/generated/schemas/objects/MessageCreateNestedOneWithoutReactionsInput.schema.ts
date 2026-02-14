import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutReactionsInputObjectSchema as MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema as MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageCreateOrConnectWithoutReactionsInputObjectSchema as MessageCreateOrConnectWithoutReactionsInputObjectSchema } from './MessageCreateOrConnectWithoutReactionsInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const MessageCreateNestedOneWithoutReactionsInputObjectSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateNestedOneWithoutReactionsInput>;
export const MessageCreateNestedOneWithoutReactionsInputObjectZodSchema = makeSchema();
