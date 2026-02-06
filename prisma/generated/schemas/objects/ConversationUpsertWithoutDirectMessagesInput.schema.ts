import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationUpdateWithoutDirectMessagesInputObjectSchema as ConversationUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUpdateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedUpdateWithoutDirectMessagesInput.schema';
import { ConversationCreateWithoutDirectMessagesInputObjectSchema as ConversationCreateWithoutDirectMessagesInputObjectSchema } from './ConversationCreateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedCreateWithoutDirectMessagesInput.schema';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ConversationUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema)]),
  create: z.union([z.lazy(() => ConversationCreateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema)]),
  where: z.lazy(() => ConversationWhereInputObjectSchema).optional()
}).strict();
export const ConversationUpsertWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationUpsertWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpsertWithoutDirectMessagesInput>;
export const ConversationUpsertWithoutDirectMessagesInputObjectZodSchema = makeSchema();
