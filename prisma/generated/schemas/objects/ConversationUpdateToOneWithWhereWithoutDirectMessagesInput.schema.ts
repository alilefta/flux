import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ConversationWhereInputObjectSchema as ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema';
import { ConversationUpdateWithoutDirectMessagesInputObjectSchema as ConversationUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUpdateWithoutDirectMessagesInput.schema';
import { ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema as ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema } from './ConversationUncheckedUpdateWithoutDirectMessagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ConversationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ConversationUpdateWithoutDirectMessagesInputObjectSchema), z.lazy(() => ConversationUncheckedUpdateWithoutDirectMessagesInputObjectSchema)])
}).strict();
export const ConversationUpdateToOneWithWhereWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationUpdateToOneWithWhereWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUpdateToOneWithWhereWithoutDirectMessagesInput>;
export const ConversationUpdateToOneWithWhereWithoutDirectMessagesInputObjectZodSchema = makeSchema();
