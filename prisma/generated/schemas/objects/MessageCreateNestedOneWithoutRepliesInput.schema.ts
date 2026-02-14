import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutRepliesInputObjectSchema as MessageCreateWithoutRepliesInputObjectSchema } from './MessageCreateWithoutRepliesInput.schema';
import { MessageUncheckedCreateWithoutRepliesInputObjectSchema as MessageUncheckedCreateWithoutRepliesInputObjectSchema } from './MessageUncheckedCreateWithoutRepliesInput.schema';
import { MessageCreateOrConnectWithoutRepliesInputObjectSchema as MessageCreateOrConnectWithoutRepliesInputObjectSchema } from './MessageCreateOrConnectWithoutRepliesInput.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutRepliesInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutRepliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutRepliesInputObjectSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputObjectSchema).optional()
}).strict();
export const MessageCreateNestedOneWithoutRepliesInputObjectSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutRepliesInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateNestedOneWithoutRepliesInput>;
export const MessageCreateNestedOneWithoutRepliesInputObjectZodSchema = makeSchema();
