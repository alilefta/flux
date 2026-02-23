import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutReactionsInputObjectSchema as MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema as MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageCreateOrConnectWithoutReactionsInputObjectSchema as MessageCreateOrConnectWithoutReactionsInputObjectSchema } from './MessageCreateOrConnectWithoutReactionsInput.schema';
import { MessageUpsertWithoutReactionsInputObjectSchema as MessageUpsertWithoutReactionsInputObjectSchema } from './MessageUpsertWithoutReactionsInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema as MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutReactionsInput.schema';
import { MessageUpdateWithoutReactionsInputObjectSchema as MessageUpdateWithoutReactionsInputObjectSchema } from './MessageUpdateWithoutReactionsInput.schema';
import { MessageUncheckedUpdateWithoutReactionsInputObjectSchema as MessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './MessageUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutReactionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => MessageWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema), z.lazy(() => MessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReactionsInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneWithoutReactionsNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneWithoutReactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneWithoutReactionsNestedInput>;
export const MessageUpdateOneWithoutReactionsNestedInputObjectZodSchema = makeSchema();
