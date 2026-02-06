import * as z from 'zod';

export const MessageScalarFieldEnumSchema = z.enum(['id', 'content', 'fileUrl', 'memberId', 'channelId', 'deleted', 'createdAt', 'updatedAt', 'edited'])

export type MessageScalarFieldEnum = z.infer<typeof MessageScalarFieldEnumSchema>;