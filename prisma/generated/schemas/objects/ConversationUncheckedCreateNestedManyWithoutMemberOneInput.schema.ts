import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutMemberOneInputObjectSchema as ConversationCreateWithoutMemberOneInputObjectSchema } from './ConversationCreateWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberOneInput.schema';
import { ConversationCreateOrConnectWithoutMemberOneInputObjectSchema as ConversationCreateOrConnectWithoutMemberOneInputObjectSchema } from './ConversationCreateOrConnectWithoutMemberOneInput.schema';
import { ConversationCreateManyMemberOneInputEnvelopeObjectSchema as ConversationCreateManyMemberOneInputEnvelopeObjectSchema } from './ConversationCreateManyMemberOneInputEnvelope.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema).array(), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConversationCreateOrConnectWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationCreateOrConnectWithoutMemberOneInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConversationCreateManyMemberOneInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedCreateNestedManyWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedCreateNestedManyWithoutMemberOneInput>;
export const ConversationUncheckedCreateNestedManyWithoutMemberOneInputObjectZodSchema = makeSchema();
