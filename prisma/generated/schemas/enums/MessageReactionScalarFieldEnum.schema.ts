import * as z from 'zod';

export const MessageReactionScalarFieldEnumSchema = z.enum(['id', 'emoji', 'messageId', 'directMessageId', 'profileId', 'createdAt'])

export type MessageReactionScalarFieldEnum = z.infer<typeof MessageReactionScalarFieldEnumSchema>;