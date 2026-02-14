import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageScalarWhereInputObjectSchema as MessageScalarWhereInputObjectSchema } from './MessageScalarWhereInput.schema';
import { MessageUpdateManyMutationInputObjectSchema as MessageUpdateManyMutationInputObjectSchema } from './MessageUpdateManyMutationInput.schema';
import { MessageUncheckedUpdateManyWithoutReplyToInputObjectSchema as MessageUncheckedUpdateManyWithoutReplyToInputObjectSchema } from './MessageUncheckedUpdateManyWithoutReplyToInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageUpdateManyMutationInputObjectSchema), z.lazy(() => MessageUncheckedUpdateManyWithoutReplyToInputObjectSchema)])
}).strict();
export const MessageUpdateManyWithWhereWithoutReplyToInputObjectSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutReplyToInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutReplyToInput>;
export const MessageUpdateManyWithWhereWithoutReplyToInputObjectZodSchema = makeSchema();
