import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionCreateWithoutProfileInputObjectSchema as MessageReactionCreateWithoutProfileInputObjectSchema } from './MessageReactionCreateWithoutProfileInput.schema';
import { MessageReactionUncheckedCreateWithoutProfileInputObjectSchema as MessageReactionUncheckedCreateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedCreateWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema)])
}).strict();
export const MessageReactionCreateOrConnectWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateOrConnectWithoutProfileInput>;
export const MessageReactionCreateOrConnectWithoutProfileInputObjectZodSchema = makeSchema();
