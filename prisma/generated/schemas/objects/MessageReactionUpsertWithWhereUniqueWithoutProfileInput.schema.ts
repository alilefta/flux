import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithoutProfileInputObjectSchema as MessageReactionUpdateWithoutProfileInputObjectSchema } from './MessageReactionUpdateWithoutProfileInput.schema';
import { MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema as MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedUpdateWithoutProfileInput.schema';
import { MessageReactionCreateWithoutProfileInputObjectSchema as MessageReactionCreateWithoutProfileInputObjectSchema } from './MessageReactionCreateWithoutProfileInput.schema';
import { MessageReactionUncheckedCreateWithoutProfileInputObjectSchema as MessageReactionUncheckedCreateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageReactionUpdateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateWithoutProfileInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpsertWithWhereUniqueWithoutProfileInput>;
export const MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectZodSchema = makeSchema();
