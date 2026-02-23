import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionScalarWhereInputObjectSchema as MessageReactionScalarWhereInputObjectSchema } from './MessageReactionScalarWhereInput.schema';
import { MessageReactionUpdateManyMutationInputObjectSchema as MessageReactionUpdateManyMutationInputObjectSchema } from './MessageReactionUpdateManyMutationInput.schema';
import { MessageReactionUncheckedUpdateManyWithoutProfileInputObjectSchema as MessageReactionUncheckedUpdateManyWithoutProfileInputObjectSchema } from './MessageReactionUncheckedUpdateManyWithoutProfileInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MessageReactionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MessageReactionUpdateManyMutationInputObjectSchema), z.lazy(() => MessageReactionUncheckedUpdateManyWithoutProfileInputObjectSchema)])
}).strict();
export const MessageReactionUpdateManyWithWhereWithoutProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUpdateManyWithWhereWithoutProfileInput>;
export const MessageReactionUpdateManyWithWhereWithoutProfileInputObjectZodSchema = makeSchema();
