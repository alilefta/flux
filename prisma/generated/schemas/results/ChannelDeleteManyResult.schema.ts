import * as z from 'zod';
export const ChannelDeleteManyResultSchema = z.object({
  count: z.number()
});