import * as z from 'zod';

export const ConversationScalarFieldEnumSchema = z.enum(['id', 'memberOneId', 'memberTwoId', 'createdAt', 'updatedAt'])

export type ConversationScalarFieldEnum = z.infer<typeof ConversationScalarFieldEnumSchema>;