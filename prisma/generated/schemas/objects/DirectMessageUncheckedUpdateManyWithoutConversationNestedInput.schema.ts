import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutConversationInputObjectSchema as DirectMessageCreateWithoutConversationInputObjectSchema } from './DirectMessageCreateWithoutConversationInput.schema';
import { DirectMessageUncheckedCreateWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateWithoutConversationInput.schema';
import { DirectMessageCreateOrConnectWithoutConversationInputObjectSchema as DirectMessageCreateOrConnectWithoutConversationInputObjectSchema } from './DirectMessageCreateOrConnectWithoutConversationInput.schema';
import { DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectSchema as DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectSchema } from './DirectMessageUpsertWithWhereUniqueWithoutConversationInput.schema';
import { DirectMessageCreateManyConversationInputEnvelopeObjectSchema as DirectMessageCreateManyConversationInputEnvelopeObjectSchema } from './DirectMessageCreateManyConversationInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectSchema as DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectSchema } from './DirectMessageUpdateWithWhereUniqueWithoutConversationInput.schema';
import { DirectMessageUpdateManyWithWhereWithoutConversationInputObjectSchema as DirectMessageUpdateManyWithWhereWithoutConversationInputObjectSchema } from './DirectMessageUpdateManyWithWhereWithoutConversationInput.schema';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutConversationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyConversationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DirectMessageUpdateManyWithWhereWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUpdateManyWithWhereWithoutConversationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DirectMessageScalarWhereInputObjectSchema), z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUncheckedUpdateManyWithoutConversationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUncheckedUpdateManyWithoutConversationNestedInput>;
export const DirectMessageUncheckedUpdateManyWithoutConversationNestedInputObjectZodSchema = makeSchema();
