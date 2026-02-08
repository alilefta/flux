import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutConversationInputObjectSchema as DirectMessageUpdateWithoutConversationInputObjectSchema } from './DirectMessageUpdateWithoutConversationInput.schema';
import { DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema as DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutConversationInput.schema';
import { DirectMessageCreateWithoutConversationInputObjectSchema as DirectMessageCreateWithoutConversationInputObjectSchema } from './DirectMessageCreateWithoutConversationInput.schema';
import { DirectMessageUncheckedCreateWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateWithoutConversationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DirectMessageUpdateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema)]),
  create: z.union([z.lazy(() => DirectMessageCreateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedCreateWithoutConversationInputObjectSchema)])
}).strict();
export const DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpsertWithWhereUniqueWithoutConversationInput>;
export const DirectMessageUpsertWithWhereUniqueWithoutConversationInputObjectZodSchema = makeSchema();
