import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutMessageInputObjectSchema as MessageReactionCreateWithoutMessageInputObjectSchema } from './MessageReactionCreateWithoutMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutMessageInput.schema';
import { MessageReactionCreateOrConnectWithoutMessageInputObjectSchema as MessageReactionCreateOrConnectWithoutMessageInputObjectSchema } from './MessageReactionCreateOrConnectWithoutMessageInput.schema';
import { MessageReactionCreateManyMessageInputEnvelopeObjectSchema as MessageReactionCreateManyMessageInputEnvelopeObjectSchema } from './MessageReactionCreateManyMessageInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyMessageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionCreateNestedManyWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateNestedManyWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateNestedManyWithoutMessageInput>;
export const MessageReactionCreateNestedManyWithoutMessageInputObjectZodSchema = makeSchema();
