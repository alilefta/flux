import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageCreateWithoutConversationInputObjectSchema as DirectMessageCreateWithoutConversationInputObjectSchema } from './DirectMessageCreateWithoutConversationInput.schema';
import { DirectMessageUncheckedCreateWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateWithoutConversationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema)])
}).strict();
export const DirectMessageCreateOrConnectWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageCreateOrConnectWithoutConversationInput>;
export const DirectMessageCreateOrConnectWithoutConversationInputObjectZodSchema = makeSchema();
