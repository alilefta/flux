import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationScalarWhereInputObjectSchema as ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema';
import { ConversationUpdateManyMutationInputObjectSchema as ConversationUpdateManyMutationInputObjectSchema } from './ConversationUpdateManyMutationInput.schema';
import { ConversationUncheckedUpdateManyWithoutMemberOneInputObjectSchema as ConversationUncheckedUpdateManyWithoutMemberOneInputObjectSchema } from './ConversationUncheckedUpdateManyWithoutMemberOneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConversationUpdateManyMutationInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateManyWithoutMemberOneInputObjectSchema)])
}).strict();
export const ConversationUpdateManyWithWhereWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUpdateManyWithWhereWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateManyWithWhereWithoutMemberOneInput>;
export const ConversationUpdateManyWithWhereWithoutMemberOneInputObjectZodSchema = makeSchema();
