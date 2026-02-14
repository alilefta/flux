import * as z from 'zod';
export const MessageReactionUpsertResultSchema = z.object({
  id: z.string(),
  emoji: z.string(),
  messageId: z.string(),
  message: z.unknown(),
  memberId: z.string(),
  profileId: z.string(),
  createdAt: z.date()
});