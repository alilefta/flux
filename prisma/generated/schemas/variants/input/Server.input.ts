import * as z from 'zod';
// prettier-ignore
export const ServerInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    inviteCode: z.string(),
    profileId: z.string(),
    profile: z.unknown(),
    members: z.array(z.unknown()),
    channels: z.array(z.unknown()),
    memberCount: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;
