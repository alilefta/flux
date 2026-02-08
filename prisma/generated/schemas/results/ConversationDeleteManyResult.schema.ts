import * as z from 'zod';
export const ConversationDeleteManyResultSchema = z.object({
  count: z.number()
});