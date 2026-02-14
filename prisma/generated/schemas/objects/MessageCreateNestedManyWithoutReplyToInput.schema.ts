import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutReplyToInputObjectSchema as MessageCreateWithoutReplyToInputObjectSchema } from './MessageCreateWithoutReplyToInput.schema';
import { MessageUncheckedCreateWithoutReplyToInputObjectSchema as MessageUncheckedCreateWithoutReplyToInputObjectSchema } from './MessageUncheckedCreateWithoutReplyToInput.schema';
import { MessageCreateOrConnectWithoutReplyToInputObjectSchema as MessageCreateOrConnectWithoutReplyToInputObjectSchema } from './MessageCreateOrConnectWithoutReplyToInput.schema';
import { MessageCreateManyReplyToInputEnvelopeObjectSchema as MessageCreateManyReplyToInputEnvelopeObjectSchema } from './MessageCreateManyReplyToInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageCreateWithoutReplyToInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutReplyToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutReplyToInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutReplyToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyReplyToInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageCreateNestedManyWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageCreateNestedManyWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageCreateNestedManyWithoutReplyToInput>;
export const MessageCreateNestedManyWithoutReplyToInputObjectZodSchema = makeSchema();
