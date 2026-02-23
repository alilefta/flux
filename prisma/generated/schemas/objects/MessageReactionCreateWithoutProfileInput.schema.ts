import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateNestedOneWithoutReactionsInputObjectSchema as MessageCreateNestedOneWithoutReactionsInputObjectSchema } from './MessageCreateNestedOneWithoutReactionsInput.schema';
import { DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema as DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema } from './DirectMessageCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  createdAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutReactionsInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema).optional()
}).strict();
export const MessageReactionCreateWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateWithoutProfileInput>;
export const MessageReactionCreateWithoutProfileInputObjectZodSchema = makeSchema();
