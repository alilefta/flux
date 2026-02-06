import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId: z.string(),
  directMessages: z.lazy(() => DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationUncheckedCreateWithoutMemberTwoInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutMemberTwoInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedCreateWithoutMemberTwoInput>;
export const ConversationUncheckedCreateWithoutMemberTwoInputObjectZodSchema = makeSchema();
