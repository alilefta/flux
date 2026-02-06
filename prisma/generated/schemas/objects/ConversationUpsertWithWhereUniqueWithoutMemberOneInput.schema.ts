import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationUpdateWithoutMemberOneInputObjectSchema as ConversationUpdateWithoutMemberOneInputObjectSchema } from './ConversationUpdateWithoutMemberOneInput.schema';
import { ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema as ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedUpdateWithoutMemberOneInput.schema';
import { ConversationCreateWithoutMemberOneInputObjectSchema as ConversationCreateWithoutMemberOneInputObjectSchema } from './ConversationCreateWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberOneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ConversationUpdateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutMemberOneInputObjectSchema)]),
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema)])
}).strict();
export const ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUpsertWithWhereUniqueWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpsertWithWhereUniqueWithoutMemberOneInput>;
export const ConversationUpsertWithWhereUniqueWithoutMemberOneInputObjectZodSchema = makeSchema();
