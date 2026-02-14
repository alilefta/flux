import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutReactionsInputObjectSchema as MessageCreateWithoutReactionsInputObjectSchema } from './MessageCreateWithoutReactionsInput.schema';
import { MessageUncheckedCreateWithoutReactionsInputObjectSchema as MessageUncheckedCreateWithoutReactionsInputObjectSchema } from './MessageUncheckedCreateWithoutReactionsInput.schema';
import { MessageCreateOrConnectWithoutReactionsInputObjectSchema as MessageCreateOrConnectWithoutReactionsInputObjectSchema } from './MessageCreateOrConnectWithoutReactionsInput.schema';
import { MessageUpsertWithoutReactionsInputObjectSchema as MessageUpsertWithoutReactionsInputObjectSchema } from './MessageUpsertWithoutReactionsInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema as MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema } from './MessageUpdateToOneWithWhereWithoutReactionsInput.schema';
import { MessageUpdateWithoutReactionsInputObjectSchema as MessageUpdateWithoutReactionsInputObjectSchema } from './MessageUpdateWithoutReactionsInput.schema';
import { MessageUncheckedUpdateWithoutReactionsInputObjectSchema as MessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './MessageUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReactionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutReactionsInputObjectSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutReactionsInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema), z.lazy(() => MessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReactionsInputObjectSchema)]).optional()
}).strict();
export const MessageUpdateOneRequiredWithoutReactionsNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateOneRequiredWithoutReactionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateOneRequiredWithoutReactionsNestedInput>;
export const MessageUpdateOneRequiredWithoutReactionsNestedInputObjectZodSchema = makeSchema();
