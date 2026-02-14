import * as z from 'zod';
import { ChannelTypeSchema } from '../../enums/ChannelType.schema';
// prettier-ignore
export const ChannelInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: ChannelTypeSchema,
    topic: z.string().optional().nullable(),
    position: z.number().int(),
    profileId: z.string(),
    profile: z.unknown(),
    serverId: z.string(),
    server: z.unknown(),
    categoryId: z.string().optional().nullable(),
    category: z.unknown().optional().nullable(),
    messages: z.array(z.unknown()),
    isDefault: z.boolean(),
    isLocked: z.boolean(),
    slowModeRate: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ChannelInputType = z.infer<typeof ChannelInputSchema>;
