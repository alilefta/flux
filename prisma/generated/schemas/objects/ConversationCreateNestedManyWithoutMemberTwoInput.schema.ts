import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutMemberTwoInputObjectSchema as ConversationCreateWithoutMemberTwoInputObjectSchema } from './ConversationCreateWithoutMemberTwoInput.schema';
import { ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberTwoInput.schema';
import { ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema as ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema } from './ConversationCreateOrConnectWithoutMemberTwoInput.schema';
import { ConversationCreateManyMemberTwoInputEnvelopeObjectSchema as ConversationCreateManyMemberTwoInputEnvelopeObjectSchema } from './ConversationCreateManyMemberTwoInputEnvelope.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema).array(), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConversationCreateManyMemberTwoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConversationCreateNestedManyWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationCreateNestedManyWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateNestedManyWithoutMemberTwoInput>;
export const ConversationCreateNestedManyWithoutMemberTwoInputObjectZodSchema = makeSchema();
