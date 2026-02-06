import * as z from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'clerkId', 'name', 'imageUrl', 'email', 'createdAt', 'updatedAt'])

export type ProfileScalarFieldEnum = z.infer<typeof ProfileScalarFieldEnumSchema>;