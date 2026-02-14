import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutMessageInputObjectSchema as MessageReactionCreateWithoutMessageInputObjectSchema } from './MessageReactionCreateWithoutMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutMessageInput.schema';
import { MessageReactionCreateOrConnectWithoutMessageInputObjectSchema as MessageReactionCreateOrConnectWithoutMessageInputObjectSchema } from './MessageReactionCreateOrConnectWithoutMessageInput.schema';
import { MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectSchema as MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectSchema } from './MessageReactionUpsertWithWhereUniqueWithoutMessageInput.schema';
import { MessageReactionCreateManyMessageInputEnvelopeObjectSchema as MessageReactionCreateManyMessageInputEnvelopeObjectSchema } from './MessageReactionCreateManyMessageInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectSchema as MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectSchema } from './MessageReactionUpdateWithWhereUniqueWithoutMessageInput.schema';
import { MessageReactionUpdateManyWithWhereWithoutMessageInputObjectSchema as MessageReactionUpdateManyWithWhereWithoutMessageInputObjectSchema } from './MessageReactionUpdateManyWithWhereWithoutMessageInput.schema';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutMessageInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutMessageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyMessageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutMessageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageReactionUpdateManyWithWhereWithoutMessageInputObjectSchema), z.lazy(() => MessageReactionUpdateManyWithWhereWithoutMessageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageReactionScalarWhereInputObjectSchema), z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionUncheckedUpdateManyWithoutMessageNestedInputObjectSchema: z.ZodType<Prisma.MessageReactionUncheckedUpdateManyWithoutMessageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUncheckedUpdateManyWithoutMessageNestedInput>;
export const MessageReactionUncheckedUpdateManyWithoutMessageNestedInputObjectZodSchema = makeSchema();
