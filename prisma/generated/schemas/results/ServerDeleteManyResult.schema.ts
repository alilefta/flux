import * as z from 'zod';
export const ServerDeleteManyResultSchema = z.object({
  count: z.number()
});