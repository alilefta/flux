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
export const MessageReactionCreateManyDirectMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyDirectMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyDirectMessageInput>;
export const MessageReactionCreateManyDirectMessageInputObjectZodSchema = makeSchema();
