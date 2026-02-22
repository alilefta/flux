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
export const MessageReactionCreateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateWithoutDirectMessageInput>;
export const MessageReactionCreateWithoutDirectMessageInputObjectZodSchema = makeSchema();
