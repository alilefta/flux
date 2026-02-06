import * as z from 'zod';
export const ConversationUpsertResultSchema = z.object({
  id: z.string(),
  memberOneId: z.string(),
  memberOne: z.unknown(),
  memberTwoId: z.string(),
  memberTwo: z.unknown(),
  directMessages: z.array(z.unknown())
});