import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithoutMemberTwoInputObjectSchema as ConversationUpdateWithoutMemberTwoInputObjectSchema } from './ConversationUpdateWithoutMemberTwoInput.schema';
import { ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema as ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedUpdateWithoutMemberTwoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConversationUpdateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema)])
}).strict();
export const ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUpdateWithWhereUniqueWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateWithWhereUniqueWithoutMemberTwoInput>;
export const ConversationUpdateWithWhereUniqueWithoutMemberTwoInputObjectZodSchema = makeSchema();
