import * as z from 'zod';
// prettier-ignore
export const ProfileModelSchema = z.object({
    id: z.string(),
    clerkId: z.string(),
    name: z.string(),
    imageUrl: z.string().nullable(),
    email: z.string(),
    servers: z.array(z.unknown()),
    members: z.array(z.unknown()),
    channels: z.array(z.unknown()),
    conversationsInitiated: z.array(z.unknown()),
    conversationsReceived: z.array(z.unknown()),
    directMessages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProfilePureType = z.infer<typeof ProfileModelSchema>;
