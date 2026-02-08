import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageCreateWithoutConversationInputObjectSchema as DirectMessageCreateWithoutConversationInputObjectSchema } from './DirectMessageCreateWithoutConversationInput.schema';
import { DirectMessageUncheckedCreateWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateWithoutConversationInput.schema';
import { DirectMessageCreateOrConnectWithoutConversationInputObjectSchema as DirectMessageCreateOrConnectWithoutConversationInputObjectSchema } from './DirectMessageCreateOrConnectWithoutConversationInput.schema';
import { DirectMessageCreateManyConversationInputEnvelopeObjectSchema as DirectMessageCreateManyConversationInputEnvelopeObjectSchema } from './DirectMessageCreateManyConversationInputEnvelope.schema';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema).array(), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DirectMessageCreateOrConnectWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageCreateOrConnectWithoutConversationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DirectMessageCreateManyConversationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DirectMessageWhereUniqueInputObjectSchema), z.lazy(() => DirectMessageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DirectMessageCreateNestedManyWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateNestedManyWithoutConversationInput>;
export const DirectMessageCreateNestedManyWithoutConversationInputObjectZodSchema = makeSchema();
