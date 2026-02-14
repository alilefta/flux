import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MessageReactionMessageIdProfileIdEmojiCompoundUniqueInputObjectSchema as MessageReactionMessageIdProfileIdEmojiCompoundUniqueInputObjectSchema } from './MessageReactionMessageIdProfileIdEmojiCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  messageId_profileId_emoji: z.lazy(() => MessageReactionMessageIdProfileIdEmojiCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MessageReactionWhereUniqueInputObjectSchema: z.ZodType<Prisma.MessageReactionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MessageReactionWhereUniqueInput>;
export const MessageReactionWhereUniqueInputObjectZodSchema = makeSchema();
