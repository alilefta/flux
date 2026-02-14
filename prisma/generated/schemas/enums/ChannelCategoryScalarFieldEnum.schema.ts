import * as z from 'zod';

export const ChannelCategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'position', 'serverId', 'createdAt', 'updatedAt'])

export type ChannelCategoryScalarFieldEnum = z.infer<typeof ChannelCategoryScalarFieldEnumSchema>;