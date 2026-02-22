import * as z from 'zod';

export const DirectMessageScalarFieldEnumSchema = z.enum(['id', 'content', 'fileUrl', 'memberId', 'conversationId', 'deleted', 'edited', 'pinned', 'replyToId', 'createdAt', 'updatedAt'])

export type DirectMessageScalarFieldEnum = z.infer<typeof DirectMessageScalarFieldEnumSchema>;