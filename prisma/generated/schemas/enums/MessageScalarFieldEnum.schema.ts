import * as z from 'zod';

export const MessageScalarFieldEnumSchema = z.enum(['id', 'content', 'fileUrl', 'memberId', 'channelId', 'deleted', 'edited', 'pinned', 'replyToId', 'createdAt', 'updatedAt'])

export type MessageScalarFieldEnum = z.infer<typeof MessageScalarFieldEnumSchema>;