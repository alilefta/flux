import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationScalarWhereInputObjectSchema as ConversationScalarWhereInputObjectSchema } from './ConversationScalarWhereInput.schema';
import { ConversationUpdateManyMutationInputObjectSchema as ConversationUpdateManyMutationInputObjectSchema } from './ConversationUpdateManyMutationInput.schema';
import { ConversationUncheckedUpdateManyWithoutMemberTwoInputObjectSchema as ConversationUncheckedUpdateManyWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedUpdateManyWithoutMemberTwoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ConversationUpdateManyMutationInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateManyWithoutMemberTwoInputObjectSchema)])
}).strict();
export const ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUpdateManyWithWhereWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateManyWithWhereWithoutMemberTwoInput>;
export const ConversationUpdateManyWithWhereWithoutMemberTwoInputObjectZodSchema = makeSchema();
