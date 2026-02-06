import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationCreateWithoutMemberOneInputObjectSchema as ConversationCreateWithoutMemberOneInputObjectSchema } from './ConversationCreateWithoutMemberOneInput.schema';
import { ConversationUncheckedCreateWithoutMemberOneInputObjectSchema as ConversationUncheckedCreateWithoutMemberOneInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberOneInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberOneInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberOneInputObjectSchema)])
}).strict();
export const ConversationCreateOrConnectWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationCreateOrConnectWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateOrConnectWithoutMemberOneInput>;
export const ConversationCreateOrConnectWithoutMemberOneInputObjectZodSchema = makeSchema();
