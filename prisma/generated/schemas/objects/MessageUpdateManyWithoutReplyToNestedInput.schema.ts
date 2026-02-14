import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutReplyToInputObjectSchema as MessageCreateWithoutReplyToInputObjectSchema } from './MessageCreateWithoutReplyToInput.schema';
import { MessageUncheckedCreateWithoutReplyToInputObjectSchema as MessageUncheckedCreateWithoutReplyToInputObjectSchema } from './MessageUncheckedCreateWithoutReplyToInput.schema';
import { MessageCreateOrConnectWithoutReplyToInputObjectSchema as MessageCreateOrConnectWithoutReplyToInputObjectSchema } from './MessageCreateOrConnectWithoutReplyToInput.schema';
import { MessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema as MessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutReplyToInput.schema';
import { MessageCreateManyReplyToInputEnvelopeObjectSchema as MessageCreateManyReplyToInputEnvelopeObjectSchema } from './MessageCreateManyReplyToInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema as MessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutReplyToInput.schema';
import { MessageUpdateManyWithWhereWithoutReplyToInputObjectSchema as MessageUpdateManyWithWhereWithoutReplyToInputObjectSchema } from './MessageUpdateManyWithWhereWithoutReplyToInput.schema';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutReplyToInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutReplyToInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutReplyToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyReplyToInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutReplyToInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutReplyToInputObjectSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutReplyToInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputObjectSchema), z.lazy(() => MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageUpdateManyWithoutReplyToNestedInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithoutReplyToNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithoutReplyToNestedInput>;
export const MessageUpdateManyWithoutReplyToNestedInputObjectZodSchema = makeSchema();
