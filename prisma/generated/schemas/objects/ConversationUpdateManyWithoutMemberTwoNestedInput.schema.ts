import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutMemberTwoInputObjectSchema as ConversationCreateWithoutMemberTwoInputObjectSchema } from './ConversationCreateWithoutMemberTwoInput.schema';
import { ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberTwoInput.schema';
import { ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema as ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema } from './ConversationCreateOrConnectWithoutMemberTwoInput.schema';
import { ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectSchema as ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectSchema } from './ConversationUpsertWithWhereUniqueWithoutMemberTwoInput.schema';
import { ConversationCreateManyMemberTwoInputEnvelopeObjectSchema as ConversationCreateManyMemberTwoInputEnvelopeObjectSchema } from './ConversationCreateManyMemberTwoInputEnvelope.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectSchema as ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectSchema } from './ConversationUpdateWithWhereUniqueWithoutMemberTwoInput.schema';
import { ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectSchema as ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectSchema } from './ConversationUpdateManyWithWhereWithoutMemberTwoInput.schema';
import { ConversationScalarWhereInputObjectSchema as ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema).array(), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConversationCreateManyMemberTwoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConversationScalarWhereInputObjectSchema), z.lazy(() => ConversationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConversationUpdateManyWithoutMemberTwoNestedInputObjectSchema: z.ZodType<Prisma.ConversationUpdateManyWithoutMemberTwoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateManyWithoutMemberTwoNestedInput>;
export const ConversationUpdateManyWithoutMemberTwoNestedInputObjectZodSchema = makeSchema();
