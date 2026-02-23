import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutProfileInputObjectSchema as MessageReactionCreateWithoutProfileInputObjectSchema } from './MessageReactionCreateWithoutProfileInput.schema';
import { MessageReactionUncheckedCreateWithoutProfileInputObjectSchema as MessageReactionUncheckedCreateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedCreateWithoutProfileInput.schema';
import { MessageReactionCreateOrConnectWithoutProfileInputObjectSchema as MessageReactionCreateOrConnectWithoutProfileInputObjectSchema } from './MessageReactionCreateOrConnectWithoutProfileInput.schema';
import { MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectSchema as MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './MessageReactionUpsertWithWhereUniqueWithoutProfileInput.schema';
import { MessageReactionCreateManyProfileInputEnvelopeObjectSchema as MessageReactionCreateManyProfileInputEnvelopeObjectSchema } from './MessageReactionCreateManyProfileInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema';
import { MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectSchema as MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './MessageReactionUpdateWithWhereUniqueWithoutProfileInput.schema';
import { MessageReactionUpdateManyWithWhereWithoutProfileInputObjectSchema as MessageReactionUpdateManyWithWhereWithoutProfileInputObjectSchema } from './MessageReactionUpdateManyWithWhereWithoutProfileInput.schema';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyProfileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageReactionUpdateManyWithWhereWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUpdateManyWithWhereWithoutProfileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageReactionScalarWhereInputObjectSchema), z.lazy(() => MessageReactionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionUpdateManyWithoutProfileNestedInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateManyWithoutProfileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyWithoutProfileNestedInput>;
export const MessageReactionUpdateManyWithoutProfileNestedInputObjectZodSchema = makeSchema();
