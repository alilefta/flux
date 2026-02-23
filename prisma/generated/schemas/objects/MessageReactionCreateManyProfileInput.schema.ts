import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  emoji: z.string(),
  messageId: z.string().optional().nullable(),
  directMessageId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();
export const MessageReactionCreateManyProfileInputObjectSchema: z.ZodType<Prisma.MessageReactionCreateManyProfileInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionCreateManyProfileInput>;
export const MessageReactionCreateManyProfileInputObjectZodSchema = makeSchema();
