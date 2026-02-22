import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  messageId: z.string(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MessageReactionUncheckedCreateWithoutDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionUncheckedCreateWithoutDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionUncheckedCreateWithoutDirectMessageInput>;
export const MessageReactionUncheckedCreateWithoutDirectMessageInputObjectZodSchema = makeSchema();
