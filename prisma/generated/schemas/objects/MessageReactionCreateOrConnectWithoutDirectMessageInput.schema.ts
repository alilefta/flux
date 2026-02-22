import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionCreateWithoutDirectMessageInputObjectSchema as MessageReactionCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutDirectMessageInput>;
export const MessageReactionCreateOrConnectWithoutDirectMessageInputObjectZodSchema = makeSchema();
