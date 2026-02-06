import * as z from 'zod';

export const MemberScalarFieldEnumSchema = z.enum(['id', 'role', 'profileId', 'serverId', 'createdAt', 'updatedAt'])

export type MemberScalarFieldEnum = z.infer<typeof MemberScalarFieldEnumSchema>;