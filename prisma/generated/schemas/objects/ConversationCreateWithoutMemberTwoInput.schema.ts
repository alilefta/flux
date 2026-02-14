import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsInitiatedInput.schema';
import { DirectMessageCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberOne: z.lazy(() => ProfileCreateNestedOneWithoutConversationsInitiatedInputObjectSchema),
  directMessages: z.lazy(() => DirectMessageCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationCreateWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationCreateWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateWithoutMemberTwoInput>;
export const ConversationCreateWithoutMemberTwoInputObjectZodSchema = makeSchema();
