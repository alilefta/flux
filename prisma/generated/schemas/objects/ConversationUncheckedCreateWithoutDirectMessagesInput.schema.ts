import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  memberOneId: z.string(),
  memberTwoId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ConversationUncheckedCreateWithoutDirectMessagesInputObjectSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutDirectMessagesInput> = makeSchema() as unknown as z.ZodType<Prisma.ConversationUncheckedCreateWithoutDirectMessagesInput>;
export const ConversationUncheckedCreateWithoutDirectMessagesInputObjectZodSchema = makeSchema();
