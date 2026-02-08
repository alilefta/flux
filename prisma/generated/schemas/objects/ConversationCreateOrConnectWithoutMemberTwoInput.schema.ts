import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationCreateWithoutMemberTwoInputObjectSchema as ConversationCreateWithoutMemberTwoInputObjectSchema } from './ConversationCreateWithoutMemberTwoInput.schema';
import { ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema as ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema } from './ConversationUncheckedCreateWithoutMemberTwoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConversationCreateWithoutMemberTwoInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema)])
}).strict();
export const ConversationCreateOrConnectWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationCreateOrConnectWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateOrConnectWithoutMemberTwoInput>;
export const ConversationCreateOrConnectWithoutMemberTwoInputObjectZodSchema = makeSchema();
