import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema as DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema } from './DirectMessageUncheckedCreateNestedManyWithoutConversationInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId: z.string(),
  memberTwoId: z.string(),
  createdAt: z.coerce.date().optional(),
  directMessages: z.lazy(() => DirectMessageUncheckedCreateNestedManyWithoutConversationInputObjectSchema).optional()
}).strict();
export const ConversationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedCreateInput>;
export const ConversationUncheckedCreateInputObjectZodSchema = makeSchema();
