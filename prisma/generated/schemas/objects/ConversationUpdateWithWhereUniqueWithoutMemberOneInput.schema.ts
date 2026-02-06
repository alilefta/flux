import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithoutMemberOneInputObjectSchema as ConversationUpdateWithoutMemberOneInputObjectSchema } from './ConversationUpdateWithoutMemberOneInput.schema';
import { ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema as ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedUpdateWithoutMemberOneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ConversationUpdateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema)])
}).strict();
export const ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUpdateWithWhereUniqueWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateWithWhereUniqueWithoutMemberOneInput>;
export const ConversationUpdateWithWhereUniqueWithoutMemberOneInputObjectZodSchema = makeSchema();
