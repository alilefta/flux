import * as z from 'zod';

export const ServerScalarFieldEnumSchema = z.enum(['id', 'name', 'imageUrl', 'inviteCode', 'profileId', 'memberCount', 'createdAt', 'updatedAt'])

export type ServerScalarFieldEnum = z.infer<typeof ServerScalarFieldEnumSchema>;