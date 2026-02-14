import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateNestedOneWithoutReactionsInputObjectSchema as MessageCreateNestedOneWithoutReactionsInputObjectSchema } from './MessageCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutReactionsInputObjectSchema)
}).strict();
export const MessageReactionCreateInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateInput>;
export const MessageReactionCreateInputObjectZodSchema = makeSchema();
