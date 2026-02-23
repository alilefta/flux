import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  directMessageId: z.string(),
  profileId: z.string(),
  emoji: z.string()
}).strict();
export const MessageReactionDirectMessageIdProfileIdEmojiCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MessageReactionDirectMessageIdProfileIdEmojiCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionDirectMessageIdProfileIdEmojiCompoundUniqueInput>;
export const MessageReactionDirectMessageIdProfileIdEmojiCompoundUniqueInputObjectZodSchema = makeSchema();
