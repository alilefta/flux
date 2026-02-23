import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateNestedOneWithoutReactionsInputObjectSchema as MessageCreateNestedOneWithoutReactionsInputObjectSchema } from './MessageCreateNestedOneWithoutReactionsInput.schema';
import { DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema as DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema } from './DirectMessageCreateNestedOneWithoutReactionsInput.schema';
import { ProfileCreateNestedOneWithoutReactionsInputObjectSchema as ProfileCreateNestedOneWithoutReactionsInputObjectSchema } from './ProfileCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  createdAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutReactionsInputObjectSchema).optional(),
  directMessage: z.lazy(() => DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutReactionsInputObjectSchema)
}).strict();
export const MessageReactionCreateInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateInput>;
export const MessageReactionCreateInputObjectZodSchema = makeSchema();
