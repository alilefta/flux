import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutMemberInputObjectSchema as MessageCreateWithoutMemberInputObjectSchema } from './MessageCreateWithoutMemberInput.schema';
import { MessageUncheckedCreateWithoutMemberInputObjectSchema as MessageUncheckedCreateWithoutMemberInputObjectSchema } from './MessageUncheckedCreateWithoutMemberInput.schema';
import { MessageCreateOrConnectWithoutMemberInputObjectSchema as MessageCreateOrConnectWithoutMemberInputObjectSchema } from './MessageCreateOrConnectWithoutMemberInput.schema';
import { MessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema as MessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './MessageUpsertWithWhereUniqueWithoutMemberInput.schema';
import { MessageCreateManyMemberInputEnvelopeObjectSchema as MessageCreateManyMemberInputEnvelopeObjectSchema } from './MessageCreateManyMemberInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema';
import { MessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema as MessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './MessageUpdateWithWhereUniqueWithoutMemberInput.schema';
import { MessageUpdateManyWithWhereWithoutMemberInputObjectSchema as MessageUpdateManyWithWhereWithoutMemberInputObjectSchema } from './MessageUpdateManyWithWhereWithoutMemberInput.schema';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => MessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyMemberInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => MessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MessageUpdateManyWithWhereWithoutMemberInputObjectSchema), z.lazy(() => MessageUpdateManyWithWhereWithoutMemberInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MessageScalarWhereInputObjectSchema), z.lazy(() => MessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedUpdateManyWithoutMemberNestedInputObjectSchema: z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutMemberNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedUpdateManyWithoutMemberNestedInput>;
export const MessageUncheckedUpdateManyWithoutMemberNestedInputObjectZodSchema = makeSchema();
