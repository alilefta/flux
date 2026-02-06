import * as z from 'zod';
export const ConversationDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  memberOneId: z.string(),
  memberOne: z.unknown(),
  memberTwoId: z.string(),
  memberTwo: z.unknown(),
  directMessages: z.array(z.unknown())
}));