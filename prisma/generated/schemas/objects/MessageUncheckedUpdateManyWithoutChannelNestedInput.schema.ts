import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutChannelInputObjectSchema as MessageCreateWithoutChannelInputObjectSchema } from './MessageCreateWithoutChannelInput.schema';
import { MessageUncheckedCreateWithoutChannelInputObjectSchema as MessageUncheckedCreateWithoutChannelInputObjectSchema } from './MessageUncheckedCreateWithoutChannelInput.schema';
import { MessageCreateOrConnectWithoutChannelInputObjectSchema as MessageCreateOrConnectWithoutChannelInputObjectSchema } from './MessageCreateOrConnectWithoutChannelInput.schema';
import { MessageUpsertWithWhereUniqueWithoutChannelInputObjectSchema as MessageUpsertWithWhereUniqueWithoutChannelInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutChannelInput.schema';
import { MessageCreateManyChannelInputEnvelopeObjectSchema as MessageCreateManyChannelInputEnvelopeObjectSchema } from './MessageCreateManyChannelInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutChannelInputObjectSchema as MessageUpdateWithWhereUniqueWithoutChannelInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutChannelInput.schema';
import { MessageUpdateManyWithWhereWithoutChannelInputObjectSchema as MessageUpdateManyWithWhereWithoutChannelInputObjectSchema } from './MessageUpdateManyWithWhereWithoutChannelInput.schema';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageCreateWithoutChannelInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutChannelInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutChannelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputObjectSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutChannelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputObjectSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutChannelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputObjectSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutChannelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputObjectSchema), z.lazy(() => MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedUpdateManyWithoutChannelNestedInputObjectSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutChannelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutChannelNestedInput>;
export const MessageUncheckedUpdateManyWithoutChannelNestedInputObjectZodSchema = makeSchema();
