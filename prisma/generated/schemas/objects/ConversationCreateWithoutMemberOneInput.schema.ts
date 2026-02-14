import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema as ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema } from './ProfileCreateNestedOneWithoutConversationsReceivedInput.schema';
import { DirectMessageCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  memberTwo: z.lazy(() => ProfileCreateNestedOneWithoutConversationsReceivedInputObjectSchema),
  directMessages: z.lazy(() => DirectMessageCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationCreateWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationCreateWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationCreateWithoutMemberOneInput>;
export const ConversationCreateWithoutMemberOneInputObjectZodSchema = makeSchema();
