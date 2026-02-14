import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageUpdateWithoutReactionsInputObjectSchema as MessageUpdateWithoutReactionsInputObjectSchema } from './MessageUpdateWithoutReactionsInput.schema';
import { MessageUncheckedUpdateWithoutReactionsInputObjectSchema as MessageUncheckedUpdateWithoutReactionsInputObjectSchema } from './MessageUncheckedUpdateWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MessageUpdateWithoutReactionsInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReactionsInputObjectSchema)])
}).strict();
export const MessageUpdateToOneWithWhereWithoutReactionsInputObjectSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutReactionsInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutReactionsInput>;
export const MessageUpdateToOneWithWhereWithoutReactionsInputObjectZodSchema = makeSchema();
