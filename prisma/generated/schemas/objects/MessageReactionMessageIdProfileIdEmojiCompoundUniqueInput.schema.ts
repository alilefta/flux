import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  messageId: z.string(),
  profileId: z.string(),
  emoji: z.string()
}).strict();
export const MessageReactionMessageIdProfileIdEmojiCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MessageReactionMessageIdProfileIdEmojiCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionMessageIdProfileIdEmojiCompoundUniqueInput>;
export const MessageReactionMessageIdProfileIdEmojiCompoundUniqueInputObjectZodSchema = makeSchema();
