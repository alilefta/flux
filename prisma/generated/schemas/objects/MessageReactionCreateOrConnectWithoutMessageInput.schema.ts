import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionCreateWithoutMessageInputObjectSchema as MessageReactionCreateWithoutMessageInputObjectSchema } from './MessageReactionCreateWithoutMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const MessageReactionCreateOrConnectWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutMessageInput>;
export const MessageReactionCreateOrConnectWithoutMessageInputObjectZodSchema = makeSchema();
