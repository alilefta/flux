import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutDirectMessageInputObjectSchema as MessageReactionUpdateWithoutDirectMessageInputObjectSchema } from './MessageReactionUpdateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutDirectMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInput>;
export const MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectZodSchema = makeSchema();
