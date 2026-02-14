import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageCreateWithoutReplyToInputObjectSchema as MessageCreateWithoutReplyToInputObjectSchema } from './MessageCreateWithoutReplyToInput.schema';
import { MessageUncheckedCreateWithoutReplyToInputObjectSchema as MessageUncheckedCreateWithoutReplyToInputObjectSchema } from './MessageUncheckedCreateWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema)])
}).strict();
export const MessageCreateOrConnectWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateOrConnectWithoutReplyToInput>;
export const MessageCreateOrConnectWithoutReplyToInputObjectZodSchema = makeSchema();
