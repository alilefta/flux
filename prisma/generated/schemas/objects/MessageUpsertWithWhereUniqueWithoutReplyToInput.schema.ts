import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutReplyToInputObjectSchema as MessageUpdateWithoutReplyToInputObjectSchema } from './MessageUpdateWithoutReplyToInput.schema';
import { MessageUncheckedUpdateWithoutReplyToInputObjectSchema as MessageUncheckedUpdateWithoutReplyToInputObjectSchema } from './MessageUncheckedUpdateWithoutReplyToInput.schema';
import { MessageCreateWithoutReplyToInputObjectSchema as MessageCreateWithoutReplyToInputObjectSchema } from './MessageCreateWithoutReplyToInput.schema';
import { MessageUncheckedCreateWithoutReplyToInputObjectSchema as MessageUncheckedCreateWithoutReplyToInputObjectSchema } from './MessageUncheckedCreateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MessageUpdateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReplyToInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema)])
}).strict();
export const MessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutReplyToInput>;
export const MessageUpsertWithWhereUniqueWithoutReplyToInputObjectZodSchema = makeSchema();
