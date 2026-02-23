import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema as DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema } from './DirectMessageCreateNestedOneWithoutReactionsInput.schema';
import { ProfileCreateNestedOneWithoutReactionsInputObjectSchema as ProfileCreateNestedOneWithoutReactionsInputObjectSchema } from './ProfileCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  createdAt: z.coerce.date().optional(),
  directMessage: z.lazy(() => DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutReactionsInputObjectSchema)
}).strict();
export const MessageReactionCreateWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateWithoutMessageInput>;
export const MessageReactionCreateWithoutMessageInputObjectZodSchema = makeSchema();
