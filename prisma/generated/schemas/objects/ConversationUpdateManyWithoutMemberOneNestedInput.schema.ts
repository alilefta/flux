import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutMemberOneInputObjectSchema as ConversationCreateWithoutMemberOneInputObjectSchema } from './ConversationCreateWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberOneInput.schema';
import { ConversationCreateOrConnectWithoutMemberOneInputObjectSchema as ConversationCreateOrConnectWithoutMemberOneInputObjectSchema } from './ConversationCreateOrConnectWithoutMemberOneInput.schema';
import { ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectSchema as ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectSchema } from './ConversationUpsertWithWhereUniqueWithoutMemberOneInput.schema';
import { ConversationCreateManyMemberOneInputEnvelopeObjectSchema as ConversationCreateManyMemberOneInputEnvelopeObjectSchema } from './ConversationCreateManyMemberOneInputEnvelope.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectSchema as ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectSchema } from './ConversationUpdateWithWhereUniqueWithoutMemberOneInput.schema';
import { ConversationUpdateManyWithWhereWithoutMemberOneInputObjectSchema as ConversationUpdateManyWithWhereWithoutMemberOneInputObjectSchema } from './ConversationUpdateManyWithWhereWithoutMemberOneInput.schema';
import { ConversationScalarWhereInputObjectSchema as ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema).array(), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ConversationCreateOrConnectWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationCreateOrConnectWithoutMemberOneInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ConversationCreateManyMemberOneInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ConversationWhereUniqueInputObjectSchema), z.lazy(() => ConversationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ConversationUpdateManyWithWhereWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUpdateManyWithWhereWithoutMemberOneInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ConversationScalarWhereInputObjectSchema), z.lazy(() => ConversationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ConversationUpdateManyWithoutMemberOneNestedInputObjectSchema: z.ZodType<Prisma.ConversationUpdateManyWithoutMemberOneNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateManyWithoutMemberOneNestedInput>;
export const ConversationUpdateManyWithoutMemberOneNestedInputObjectZodSchema = makeSchema();
