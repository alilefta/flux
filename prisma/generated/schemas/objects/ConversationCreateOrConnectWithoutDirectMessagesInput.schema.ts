import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema';
import { ConversationCreateWithoutDirectMessagesInputObjectSchema as ConversationCreateWithoutDirectMessagesInputObjectSchema } from './ConversationCreateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedCreateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ConversationCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema)])
}).strict();
export const ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationCreateOrConnectWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateOrConnectWithoutDirectMessagesInput>;
export const ConversationCreateOrConnectWithoutDirectMessagesInputObjectZodSchema = makeSchema();
