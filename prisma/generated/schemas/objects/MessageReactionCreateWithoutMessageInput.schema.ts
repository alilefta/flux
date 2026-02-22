import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema as DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema } from './DirectMessageCreateNestedOneWithoutReactionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional(),
  directMessage: z.lazy(() => DirectMessageCreateNestedOneWithoutReactionsInputObjectSchema).optional()
}).strict();
export const MessageReactionCreateWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateWithoutMessageInput>;
export const MessageReactionCreateWithoutMessageInputObjectZodSchema = makeSchema();
