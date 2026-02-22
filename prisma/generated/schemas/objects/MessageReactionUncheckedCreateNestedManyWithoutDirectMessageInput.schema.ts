import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutDirectMessageInputObjectSchema as MessageReactionCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutDirectMessageInput.schema';
import { MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema as MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateOrConnectWithoutDirectMessageInput.schema';
import { MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema as MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema } from './MessageReactionCreateManyDirectMessageInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInput>;
export const MessageReactionUncheckedCreateNestedManyWithoutDirectMessageInputObjectZodSchema = makeSchema();
