import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationCreateWithoutDirectMessagesInputObjectSchema as ConversationCreateWithoutDirectMessagesInputObjectSchema } from './ConversationCreateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedCreateWithoutDirectMessagesInput.schema';
import { ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema as ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema } from './ConversationCreateOrConnectWithoutDirectMessagesInput.schema';
import { ConversationWhereUniqueInputObjectSchema as ConversationWhereUniqueInputObjectSchema } from './ConversationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ConversationCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ConversationCreateOrConnectWithoutDirectMessagesInputObjectSchema).optional(),
  connect: z.lazy(() => ConversationWhereUniqueInputObjectSchema).optional()
}).strict();
export const ConversationCreateNestedOneWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationCreateNestedOneWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateNestedOneWithoutDirectMessagesInput>;
export const ConversationCreateNestedOneWithoutDirectMessagesInputObjectZodSchema = makeSchema();
