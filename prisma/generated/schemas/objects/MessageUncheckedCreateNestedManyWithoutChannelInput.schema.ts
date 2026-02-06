import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutChannelInputObjectSchema as MessageCreateWithoutChannelInputObjectSchema } from './MessageCreateWithoutChannelInput.schema';
import { MessageUncheckedCreateWithoutChannelInputObjectSchema as MessageUncheckedCreateWithoutChannelInputObjectSchema } from './MessageUncheckedCreateWithoutChannelInput.schema';
import { MessageCreateOrConnectWithoutChannelInputObjectSchema as MessageCreateOrConnectWithoutChannelInputObjectSchema } from './MessageCreateOrConnectWithoutChannelInput.schema';
import { MessageCreateManyChannelInputEnvelopeObjectSchema as MessageCreateManyChannelInputEnvelopeObjectSchema } from './MessageCreateManyChannelInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageCreateWithoutChannelInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutChannelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutChannelInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutChannelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyChannelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedCreateNestedManyWithoutChannelInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutChannelInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutChannelInput>;
export const MessageUncheckedCreateNestedManyWithoutChannelInputObjectZodSchema = makeSchema();
