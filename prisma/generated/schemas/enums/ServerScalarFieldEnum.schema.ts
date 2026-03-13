import * as z from 'zod';

export const ServerScalarFieldEnumSchema = z.enum(['id', 'name', 'imageUrl', 'inviteCode', 'description', 'memberCount', 'profileId', 'isPublic', 'createdAt', 'updatedAt'])

export type ServerScalarFieldEnum = z.infer<typeof ServerScalarFieldEnumSchema>;