import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutMemberInputObjectSchema as DirectMessageCreateWithoutMemberInputObjectSchema } from './DirectMessageCreateWithoutMemberInput.schema';
import { DirectMessageUncheckedCreateWithoutMemberInputObjectSchema as DirectMessageUncheckedCreateWithoutMemberInputObjectSchema } from './DirectMessageUncheckedCreateWithoutMemberInput.schema';
import { DirectMessageCreateOrConnectWithoutMemberInputObjectSchema as DirectMessageCreateOrConnectWithoutMemberInputObjectSchema } from './DirectMessageCreateOrConnectWithoutMemberInput.schema';
import { DirectMessageCreateManyMemberInputEnvelopeObjectSchema as DirectMessageCreateManyMemberInputEnvelopeObjectSchema } from './DirectMessageCreateManyMemberInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutMemberInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutMemberInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutMemberInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutMemberInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyMemberInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageCreateNestedManyWithoutMemberInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutMemberInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutMemberInput>;
export const DirectMessageCreateNestedManyWithoutMemberInputObjectZodSchema = makeSchema();
