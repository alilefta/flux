import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageCreateWithoutMemberInputObjectSchema as MessageCreateWithoutMemberInputObjectSchema } from './MessageCreateWithoutMemberInput.schema';
import { MessageUncheckedCreateWithoutMemberInputObjectSchema as MessageUncheckedCreateWithoutMemberInputObjectSchema } from './MessageUncheckedCreateWithoutMemberInput.schema';
import { MessageCreateOrConnectWithoutMemberInputObjectSchema as MessageCreateOrConnectWithoutMemberInputObjectSchema } from './MessageCreateOrConnectWithoutMemberInput.schema';
import { MessageCreateManyMemberInputEnvelopeObjectSchema as MessageCreateManyMemberInputEnvelopeObjectSchema } from './MessageCreateManyMemberInputEnvelope.schema';
import { MessageWhereUniqueInputObjectSchema as MessageWhereUniqueInputObjectSchema } from './MessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MessageCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => MessageUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MessageCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => MessageCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MessageCreateManyMemberInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MessageWhereUniqueInputObjectSchema), z.lazy(() => MessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MessageUncheckedCreateNestedManyWithoutMemberInputObjectSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutMemberInput>;
export const MessageUncheckedCreateNestedManyWithoutMemberInputObjectZodSchema = makeSchema();
