import * as z from 'zod';
export const MessageReactionFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  emoji: z.string(),
  messageId: z.string().optional(),
  message: z.unknown().optional(),
  directMessageId: z.string().optional(),
  directMessage: z.unknown().optional(),
  profileId: z.string(),
  profile: z.unknown(),
  createdAt: z.date()
}));