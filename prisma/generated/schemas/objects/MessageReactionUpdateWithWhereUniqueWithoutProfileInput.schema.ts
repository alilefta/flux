import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutProfileInputObjectSchema as MessageReactionUpdateWithoutProfileInputObjectSchema } from './MessageReactionUpdateWithoutProfileInput.schema';
import { MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema as MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema)])
}).strict();
export const MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateWithWhereUniqueWithoutProfileInput>;
export const MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
