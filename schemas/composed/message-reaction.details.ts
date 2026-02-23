import z from "zod";
import { MessageReactionSchema } from "../message-reaction.base";
import { ProfileBaseSchema } from "../profile";
import { MessageBaseSchema } from "../message";
import { DirectMessageBaseSchema } from "../direct-message.base";

export const MessageReaction = MessageReactionSchema.extend(
	z.object({
		profile: ProfileBaseSchema,
		message: MessageBaseSchema.nullable(),
		directMessage: DirectMessageBaseSchema.nullable(),
	}).shape,
);
