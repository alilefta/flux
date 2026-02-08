import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageWhereUniqueInputObjectSchema as DirectMessageWhereUniqueInputObjectSchema } from './DirectMessageWhereUniqueInput.schema';
import { DirectMessageUpdateWithoutConversationInputObjectSchema as DirectMessageUpdateWithoutConversationInputObjectSchema } from './DirectMessageUpdateWithoutConversationInput.schema';
import { DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema as DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema } from './DirectMessageUncheckedUpdateWithoutConversationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateWithoutConversationInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateWithoutConversationInputObjectSchema)])
}).strict();
export const DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateWithWhereUniqueWithoutConversationInput>;
export const DirectMessageUpdateWithWhereUniqueWithoutConversationInputObjectZodSchema = makeSchema();
