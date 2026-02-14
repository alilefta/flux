import * as z from 'zod';
// prettier-ignore
export const ChannelCategoryInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    position: z.number().int(),
    serverId: z.string(),
    server: z.unknown(),
    channels: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ChannelCategoryInputType = z.infer<typeof ChannelCategoryInputSchema>;
