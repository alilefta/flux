import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithoutReplyToInputObjectSchema as MessageUpdateWithoutReplyToInputObjectSchema } from './MessageUpdateWithoutReplyToInput.schema';
import { MessageUncheckedUpdateWithoutReplyToInputObjectSchema as MessageUncheckedUpdateWithoutReplyToInputObjectSchema } from './MessageUncheckedUpdateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutReplyToInputObjectSchema)])
}).strict();
export const MessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutReplyToInput>;
export const MessageUpdateWithWhereUniqueWithoutReplyToInputObjectZodSchema = makeSchema();
