import * as z from 'zod';

export const ConversationScalarFieldEnumSchema = z.enum(['id', 'memberOneId', 'memberTwoId'])

export type ConversationScalarFieldEnum = z.infer<typeof ConversationScalarFieldEnumSchema>;