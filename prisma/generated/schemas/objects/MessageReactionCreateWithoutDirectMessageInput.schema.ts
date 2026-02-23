import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateNestedOneWithoutReactionsInputObjectSchema as MessageCreateNestedOneWithoutReactionsInputObjectSchema } from './MessageCreateNestedOneWithoutReactionsInput.schema';
import { ProfileCreateNestedOneWithoutReactionsInputObjectSchema as ProfileCreateNestedOneWithoutReactionsInputObjectSchema } from './ProfileCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  createdAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutReactionsInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutReactionsInputObjectSchema)
}).strict();
export const MessageReactionCreateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateWithoutDirectMessageInput>;
export const MessageReactionCreateWithoutDirectMessageInputObjectZodSchema = makeSchema();
