import * as z from 'zod';
import { ChannelTypeSchema } from '../../enums/ChannelType.schema';
// prettier-ignore
export const ChannelResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: ChannelTypeSchema,
    profileId: z.string(),
    profile: z.unknown(),
    serverId: z.string(),
    server: z.unknown(),
    messages: z.array(z.unknown()),
    isDefault: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ChannelResultType = z.infer<typeof ChannelResultSchema>;
