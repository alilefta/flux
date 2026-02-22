import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutDirectMessageInputObjectSchema as MessageReactionUpdateWithoutDirectMessageInputObjectSchema } from './MessageReactionUpdateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutDirectMessageInput.schema';
import { MessageReactionCreateWithoutDirectMessageInputObjectSchema as MessageReactionCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageReactionUpdateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInput>;
export const MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectZodSchema = makeSchema();
