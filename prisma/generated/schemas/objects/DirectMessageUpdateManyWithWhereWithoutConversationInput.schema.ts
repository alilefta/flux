import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageScalarWhereInputObjectSchema as DirectMessageScalarWhereInputObjectSchema } from './DirectMessageScalarWhereInput.schema';
import { DirectMessageUpdateManyMutationInputObjectSchema as DirectMessageUpdateManyMutationInputObjectSchema } from './DirectMessageUpdateManyMutationInput.schema';
import { DirectMessageUncheckedUpdateManyWithoutConversationInputObjectSchema as DirectMessageUncheckedUpdateManyWithoutConversationInputObjectSchema } from './DirectMessageUncheckedUpdateManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DirectMessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DirectMessageUpdateManyMutationInputObjectSchema), z.lazy(() => DirectMessageUncheckedUpdateManyWithoutConversationInputObjectSchema)])
}).strict();
export const DirectMessageUpdateManyWithWhereWithoutConversationInputObjectSchema: z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutConversationInput> = makeSchema() as unknown as z.ZodType<Prisma.DirectMessageUpdateManyWithWhereWithoutConversationInput>;
export const DirectMessageUpdateManyWithWhereWithoutConversationInputObjectZodSchema = makeSchema();
