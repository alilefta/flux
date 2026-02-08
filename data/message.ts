// import { ERRORS } from "@/lib/errors";
// import { getMemberByProfileId } from "./member";
// import { getCurrentProfile } from "./profile";
// import prisma from "@/lib/prisma";
// import { getChannelById } from "./channel";
// import { GetMessageInput } from "@/schemas/message";

// export async function getMessages({ channelId, serverId }: GetMessageInput) {
// 	const profile = await getCurrentProfile();
// 	// Get member
// 	const member = await getMemberByProfileId(profile.id);
// 	if (!member) throw ERRORS.NOT_MEMBER;

// 	// Verify channel exists
// 	const channel = await getChannelById(channelId);
// 	if (!channel) throw ERRORS.CHANNEL_NOT_FOUND;

// 	// Create message
// 	try {
// 		const messages = await prisma.message.findMany({
// 			where: {
// 				channelId: channelId,
// 			},
// 			include: {
// 				member: true,
// 			},
// 			orderBy: {
// 				createdAt: "desc",
// 			},
// 		});
// 		return { success: true, data: messages };
// 	} catch (e) {
// 		console.error(e);
// 		return { success: false, error: "An error occured while loading messages." };
// 	}
// }
