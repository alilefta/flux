import * as z from 'zod';
// prettier-ignore
export const ConversationInputSchema = z.object({
    id: z.string(),
    memberOneId: z.string(),
    memberOne: z.unknown(),
    memberTwoId: z.string(),
    memberTwo: z.unknown(),
    directMessages: z.array(z.unknown())
}).strict();

export type ConversationInputType = z.infer<typeof ConversationInputSchema>;
