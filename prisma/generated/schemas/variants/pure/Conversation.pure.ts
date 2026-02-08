import * as z from 'zod';
// prettier-ignore
export const ConversationModelSchema = z.object({
    id: z.string(),
    memberOneId: z.string(),
    memberOne: z.unknown(),
    memberTwoId: z.string(),
    memberTwo: z.unknown(),
    directMessages: z.array(z.unknown())
}).strict();

export type ConversationPureType = z.infer<typeof ConversationModelSchema>;
