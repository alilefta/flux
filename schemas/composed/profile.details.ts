import z from "zod";
import { ProfileBaseSchema } from "../profile";
import { ServerBaseSchema } from "../server.base";
import { MemberBaseSchema } from "../member";
import { ChannelBaseSchema } from "../channel";
import { DirectMessageBaseSchema } from "../direct-message.base";
import { ConversationBaseSchema } from "../conversation.base";

export const ProfileSchema = ProfileBaseSchema.extend(
	z.object({
		servers: z.array(ServerBaseSchema),
		members: z.array(MemberBaseSchema),
		channels: z.array(ChannelBaseSchema),
		directMessages: z.array(DirectMessageBaseSchema),
		conversationsInitiated: z.array(ConversationBaseSchema),
		conversationsReceived: z.array(ConversationBaseSchema),
	}).shape,
);

export const GetProfileDetailsSchema = z.object({
	profileId: z.string(),
	serverId: z.string().optional(), // Optional: only if viewing from a server
});
