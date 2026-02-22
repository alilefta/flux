import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutDirectMessageInputObjectSchema as MessageReactionCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateWithoutDirectMessageInput.schema';
import { MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedCreateWithoutDirectMessageInput.schema';
import { MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema as MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema } from './MessageReactionCreateOrConnectWithoutDirectMessageInput.schema';
import { MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema as MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema } from './MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInput.schema';
import { MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema as MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema } from './MessageReactionCreateManyDirectMessageInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema as MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema } from './MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInput.schema';
import { MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectSchema as MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectSchema } from './MessageReactionUpdateManyWithWhereWithoutDirectMessageInput.schema';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutDirectMessageInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutDirectMessageInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutDirectMessageInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyDirectMessageInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutDirectMessageInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectSchema), z.lazy(() => MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageReactionScalarWhereInputObjectSchema), z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateManyWithoutDirectMessageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyWithoutDirectMessageNestedInput>;
export const MessageReactionUpdateManyWithoutDirectMessageNestedInputObjectZodSchema = makeSchema();
