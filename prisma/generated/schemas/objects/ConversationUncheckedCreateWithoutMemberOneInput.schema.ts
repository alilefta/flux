import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  memberTwoId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationUncheckedCreateWithoutMemberOneInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutMemberOneInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedCreateWithoutMemberOneInput>;
export const ConversationUncheckedCreateWithoutMemberOneInputObjectZodSchema = makeSchema();
