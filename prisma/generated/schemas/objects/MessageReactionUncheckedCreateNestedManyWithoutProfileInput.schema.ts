import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionCreateWithoutProfileInputObjectSchema as MessageReactionCreateWithoutProfileInputObjectSchema } from './MessageReactionCreateWithoutProfileInput.schema';
import { MessageReactionUncheckedCreateWithoutProfileInputObjectSchema as MessageReactionUncheckedCreateWithoutProfileInputObjectSchema } from './MessageReactionUncheckedCreateWithoutProfileInput.schema';
import { MessageReactionCreateOrConnectWithoutProfileInputObjectSchema as MessageReactionCreateOrConnectWithoutProfileInputObjectSchema } from './MessageReactionCreateOrConnectWithoutProfileInput.schema';
import { MessageReactionCreateManyProfileInputEnvelopeObjectSchema as MessageReactionCreateManyProfileInputEnvelopeObjectSchema } from './MessageReactionCreateManyProfileInputEnvelope.schema';
import { MessageReactionWhereUniqueInputObjectSchema as MessageReactionWhereUniqueInputObjectSchema } from './MessageReactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionCreateWithoutProfileInputObjectSchema).array(), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionUncheckedCreateWithoutProfileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageReactionCreateOrConnectWithoutProfileInputObjectSchema), z.lazy(() => MessageReactionCreateOrConnectWithoutProfileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageReactionCreateManyProfileInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageReactionWhereUniqueInputObjectSchema), z.lazy(() => MessageReactionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageReactionUncheckedCreateNestedManyWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionUncheckedCreateNestedManyWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUncheckedCreateNestedManyWithoutProfileInput>;
export const MessageReactionUncheckedCreateNestedManyWithoutProfileInputObjectZodSchema = makeSchema();
