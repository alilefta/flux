import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema';
import { MessageReactionUpdateManyMutationInputObjectSchema as MessageReactionUpdateManyMutationInputObjectSchema } from './MessageReactionUpdateManyMutationInput.schema';
import { MessageReactionUncheckedUpdateManyWithoutMessageInputObjectSchema as MessageReactionUncheckedUpdateManyWithoutMessageInputObjectSchema } from './MessageReactionUncheckedUpdateManyWithoutMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateManyMutationInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateManyWithoutMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpdateManyWithWhereWithoutMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutMessageInput>;
export const MessageReactionUpdateManyWithWhereWithoutMessageInputObjectZodSchema = makeSchema();
