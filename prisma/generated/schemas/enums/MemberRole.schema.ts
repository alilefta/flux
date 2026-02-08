import * as z from 'zod';

export const MemberRoleSchema = z.enum(['ADMIN', 'MODERATOR', 'GUEST'])

export type MemberRole = z.infer<typeof MemberRoleSchema>;