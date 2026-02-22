import z from "zod";
import { ConversationBaseSchema } from "../conversation.base";
import { ProfileBaseSchema } from "../profile";
import { DirectMessageBaseSchema } from "../direct-message.base";

export const ConversationDetailsSchema = ConversationBaseSchema.extend(
	z.object({
		memberOne: ProfileBaseSchema,
		memberTwo: ProfileBaseSchema,
		directMessages: z.array(DirectMessageBaseSchema),
	}).shape,
);

export type ConversationDetailsBase = z.infer<typeof ConversationDetailsSchema>;
