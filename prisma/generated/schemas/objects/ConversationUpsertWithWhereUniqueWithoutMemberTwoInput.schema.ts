import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithoutMemberTwoInputObjectSchema as ConversationUpdateWithoutMemberTwoInputObjectSchema } from './ConversationUpdateWithoutMemberTwoInput.schema';
import { ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema as ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedUpdateWithoutMemberTwoInput.schema';
import { ConversationCreateWithoutMemberTwoInputObjectSchema as ConversationCreateWithoutMemberTwoInputObjectSchema } from './ConversationCreateWithoutMemberTwoInput.schema';
import { ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberTwoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConversationUpdateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutMemberTwoInputObjectSchema)]),
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema)])
}).strict();
export const ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUpsertWithWhereUniqueWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpsertWithWhereUniqueWithoutMemberTwoInput>;
export const ConversationUpsertWithWhereUniqueWithoutMemberTwoInputObjectZodSchema = makeSchema();
