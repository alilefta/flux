import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsInitiatedInput.schema';
import { ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsReceivedInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOne: z.lazy(() => ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema),
  memberTwo: z.lazy(() => ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema)
}).strict();
export const ConversationCreateWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationCreateWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateWithoutDirectMessagesInput>;
export const ConversationCreateWithoutDirectMessagesInputObjectZodSchema = makeSchema();
