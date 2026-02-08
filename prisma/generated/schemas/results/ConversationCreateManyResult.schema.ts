import * as z from 'zod';
export const ConversationCreateManyResultSchema = z.object({
  count: z.number()
});