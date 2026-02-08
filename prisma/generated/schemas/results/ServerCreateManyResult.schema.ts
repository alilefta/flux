import * as z from 'zod';
export const ServerCreateManyResultSchema = z.object({
  count: z.number()
});