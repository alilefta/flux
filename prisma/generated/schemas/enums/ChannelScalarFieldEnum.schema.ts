import * as z from 'zod';

export const ChannelScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'topic', 'position', 'profileId', 'serverId', 'categoryId', 'isDefault', 'isLocked', 'slowModeRate', 'createdAt', 'updatedAt'])

export type ChannelScalarFieldEnum = z.infer<typeof ChannelScalarFieldEnumSchema>;