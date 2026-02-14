import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereInputObjectSchema as MessageWhereInputObjectSchema } from './MessageWhereInput.schema';
import { MessageUpdateWithoutRepliesInputObjectSchema as MessageUpdateWithoutRepliesInputObjectSchema } from './MessageUpdateWithoutRepliesInput.schema';
import { MessageUncheckedUpdateWithoutRepliesInputObjectSchema as MessageUncheckedUpdateWithoutRepliesInputObjectSchema } from './MessageUncheckedUpdateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MessageUpdateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedUpdateWithoutRepliesInputObjectSchema)])
}).strict();
export const MessageUpdateToOneWithWhereWithoutRepliesInputObjectSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutRepliesInput>;
export const MessageUpdateToOneWithWhereWithoutRepliesInputObjectZodSchema = makeSchema();
