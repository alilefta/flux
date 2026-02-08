import * as z from 'zod';
export const ServerUpdateManyResultSchema = z.object({
  count: z.number()
});