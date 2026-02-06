import * as z from 'zod';

export const ChannelScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'profileId', 'serverId', 'isDefault', 'createdAt', 'updatedAt'])

export type ChannelScalarFieldEnum = z.infer<typeof ChannelScalarFieldEnumSchema>;