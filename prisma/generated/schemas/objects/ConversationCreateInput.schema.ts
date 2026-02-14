import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsInitiatedInput.schema';
import { ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsReceivedInput.schema';
import { DirectMessageCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  memberOne: z.lazy(() => ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema),
  memberTwo: z.lazy(() => ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema),
  directMessages: z.lazy(() => DirectMessageCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationCreateInputObjectSchema: z.ZodType<Prisma.ConversationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateInput>;
export const ConversationCreateInputObjectZodSchema = makeSchema();
