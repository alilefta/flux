import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutMessageInputObjectSchema as MessageReactionUpdateWithoutMessageInputObjectSchema } from './MessageReactionUpdateWithoutMessageInput.schema';
import { MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema as MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutMessageInput.schema';
import { MessageReactionCreateWithoutMessageInputObjectSchema as MessageReactionCreateWithoutMessageInputObjectSchema } from './MessageReactionCreateWithoutMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageReactionUpdateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutMessageInput>;
export const MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
