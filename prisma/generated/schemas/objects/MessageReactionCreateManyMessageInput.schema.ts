import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MessageReactionCreateManyMessageInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyMessageInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyMessageInput>;
export const MessageReactionCreateManyMessageInputObjectZodSchema = makeSchema();
