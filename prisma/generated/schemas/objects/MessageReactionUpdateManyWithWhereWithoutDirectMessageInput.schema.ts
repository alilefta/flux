import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema';
import { MessageReactionUpdateManyMutationInputObjectSchema as MessageReactionUpdateManyMutationInputObjectSchema } from './MessageReactionUpdateManyMutationInput.schema';
import { MessageReactionUncheckedUpdateManyWithoutDirectMessageInputObjectSchema as MessageReactionUncheckedUpdateManyWithoutDirectMessageInputObjectSchema } from './MessageReactionUncheckedUpdateManyWithoutDirectMessageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateManyMutationInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateManyWithoutDirectMessageInputObjectSchema)])
}).strict();
export const MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutDirectMessageInput>;
export const MessageReactionUpdateManyWithWhereWithoutDirectMessageInputObjectZodSchema = makeSchema();
