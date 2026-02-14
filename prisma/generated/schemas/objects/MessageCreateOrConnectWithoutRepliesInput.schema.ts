import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutRepliesInputObjectSchema as MessageCreateWithoutRepliesInputObjectSchema } from './MessageCreateWithoutRepliesInput.schema';
import { MessageUncheckedCreateWithoutRepliesInputObjectSchema as MessageUncheckedCreateWithoutRepliesInputObjectSchema } from './MessageUncheckedCreateWithoutRepliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRepliesInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutRepliesInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutRepliesInput>;
export const MessageCreateOrConnectWithoutRepliesInputObjectZodSchema = makeSchema();
