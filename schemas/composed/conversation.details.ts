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

export const DirctMessageNotificationSchema = z.object({
	conversationId: z.uuid(),
	senderId: z.uuid(),
	senderName: z.string(),
	senderImage: z.string(),
	content: z.string().default("Sent an attachment"),
});

export type DirectMessageNotification = z.infer<typeof DirctMessageNotificationSchema>;
