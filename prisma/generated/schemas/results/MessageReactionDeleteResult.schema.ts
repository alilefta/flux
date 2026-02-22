import * as z from 'zod';
export const MessageReactionDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  emoji: z.string(),
  messageId: z.string(),
  message: z.unknown(),
  directMessageId: z.string().optional(),
  directMessage: z.unknown().optional(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.date()
}));