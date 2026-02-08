import * as z from 'zod';
import { MemberRoleSchema } from '../../enums/MemberRole.schema';
// prettier-ignore
export const MemberInputSchema = z.object({
    id: z.string(),
    role: MemberRoleSchema,
    profileId: z.string(),
    profile: z.unknown(),
    serverId: z.string(),
    server: z.unknown(),
    messages: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MemberInputType = z.infer<typeof MemberInputSchema>;
