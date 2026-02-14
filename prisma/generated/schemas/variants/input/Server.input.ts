import * as z from 'zod';
// prettier-ignore
export const ServerInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    inviteCode: z.string(),
    description: z.string().optional().nullable(),
    memberCount: z.number().int(),
    profileId: z.string(),
    profile: z.unknown(),
    members: z.array(z.unknown()),
    channels: z.array(z.unknown()),
    categories: z.array(z.unknown()),
    auditLog: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ServerInputType = z.infer<typeof ServerInputSchema>;
