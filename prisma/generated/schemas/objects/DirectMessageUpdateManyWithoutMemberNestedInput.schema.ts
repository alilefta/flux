import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutMemberInputObjectSchema as DirectMessageCreateWithoutMemberInputObjectSchema } from './DirectMessageCreateWithoutMemberInput.schema';
import { DirectMessageUncheckedCreateWithoutMemberInputObjectSchema as DirectMessageUncheckedCreateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedCreateWithoutMemberInput.schema';
import { DirectMessageCreateOrConnectWithoutMemberInputObjectSchema as DirectMessageCreateOrConnectWithoutMemberInputObjectSchema } from './DirectMessageCreateOrConnectWithoutMemberInput.schema';
import { DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema as DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema } from './DirectMessageUpsertWithWhereUniqueWithoutMemberInput.schema';
import { DirectMessageCreateManyMemberInputEnvelopeObjectSchema as DirectMessageCreateManyMemberInputEnvelopeObjectSchema } from './DirectMessageCreateManyMemberInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema as DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema } from './DirectMessageUpdateWithWhereUniqueWithoutMemberInput.schema';
import { DirectMessageUpdateManyWithWhereWithoutMemberInputObjectSchema as DirectMessageUpdateManyWithWhereWithoutMemberInputObjectSchema } from './DirectMessageUpdateManyWithWhereWithoutMemberInput.schema';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUpsertWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyMemberInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUpdateWithWhereUniqueWithoutMemberInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => DirectMessageUpdateManyWithWhereWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUpdateManyWithWhereWithoutMemberInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => DirectMessageScalarWhereInputObjectSchema), z.lazy(() => DirectMessageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageUpdateManyWithoutMemberNestedInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateManyWithoutMemberNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyWithoutMemberNestedInput>;
export const DirectMessageUpdateManyWithoutMemberNestedInputObjectZodSchema = makeSchema();
