import * as z from 'zod';
import { ChannelTypeSchema } from '../../enums/ChannelType.schema';
// prettier-ignore
export const ChannelResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: ChannelTypeSchema,
    topic: z.string().nullable(),
    position: z.number().int(),
    profileId: z.string(),
    profile: z.unknown(),
    serverId: z.string(),
    server: z.unknown(),
    categoryId: z.string().nullable(),
    category: z.unknown().nullable(),
    messages: z.array(z.unknown()),
    isDefault: z.boolean(),
    isLocked: z.boolean(),
    slowModeRate: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ChannelResultType = z.infer<typeof ChannelResultSchema>;
