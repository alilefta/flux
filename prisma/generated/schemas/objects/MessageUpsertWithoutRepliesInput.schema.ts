import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageUpdateWithoutRepliesInputObjectSchema as MessageUpdateWithoutRepliesInputObjectSchema } from './MessageUpdateWithoutRepliesInput.schema';
import { MessageUncheckedUpdateWithoutRepliesInputObjectSchema as MessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './MessageUncheckedUpdateWithoutRepliesInput.schema';
import { MessageCreateWithoutRepliesInputObjectSchema as MessageCreateWithoutRepliesInputObjectSchema } from './MessageCreateWithoutRepliesInput.schema';
import { MessageUncheckedCreateWithoutRepliesInputObjectSchema as MessageUncheckedCreateWithoutRepliesInputObjectSchema } from './MessageUncheckedCreateWithoutRepliesInput.schema';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutRepliesInputObjectSchema)]),
  create: z.union([z.lazy(() => MessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRepliesInputObjectSchema)]),
  where: z.lazy(() => MessageWhereInputObjectSchema).optional()
}).strict();
export const MessageUpsertWithoutRepliesInputObjectSchema: z.ZodType<Prisma.MessageUpsertWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpsertWithoutRepliesInput>;
export const MessageUpsertWithoutRepliesInputObjectZodSchema = makeSchema();
