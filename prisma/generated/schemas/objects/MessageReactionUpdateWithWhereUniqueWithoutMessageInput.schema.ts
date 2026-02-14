import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutMessageInputObjectSchema as MessageReactionUpdateWithoutMessageInputObjectSchema } from './MessageReactionUpdateWithoutMessageInput.schema';
import { MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema as MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutMessageInput>;
export const MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectZodSchema = makeSchema();
