import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutReplyToInputObjectSchema as DirectMessageCreateWithoutReplyToInputObjectSchema } from './DirectMessageCreateWithoutReplyToInput.schema';
import { DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema as DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema } from './DirectMessageUncheckedCreateWithoutReplyToInput.schema';
import { DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema as DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema } from './DirectMessageCreateOrConnectWithoutReplyToInput.schema';
import { DirectMessageCreateManyReplyToInputEnvelopeObjectSchema as DirectMessageCreateManyReplyToInputEnvelopeObjectSchema } from './DirectMessageCreateManyReplyToInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutReplyToInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutReplyToInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutReplyToInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyReplyToInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageCreateNestedManyWithoutReplyToInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutReplyToInput>;
export const DirectMessageCreateNestedManyWithoutReplyToInputObjectZodSchema = makeSchema();
