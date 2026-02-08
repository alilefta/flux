import * as z from 'zod';

export const DirectMessageScalarFieldEnumSchema = z.enum(['id', 'content', 'fileUrl', 'memberId', 'conversationId', 'deleted', 'createdAt', 'updatedAt'])

export type DirectMessageScalarFieldEnum = z.infer<typeof DirectMessageScalarFieldEnumSchema>;