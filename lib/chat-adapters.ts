import { MemberProfile } from "@/schemas/member";
import { ProfileBase } from "@/schemas/profile";
import { MemberRole } from "@/generated/prisma/enums";
import { MessageSender } from "@/schemas/message-member.base";

/**
 * ADAPTER: Channel Member -> UI Sender
 * Takes a Member with nested Profile and flattens it.
 */
export function memberToSender(member: MemberProfile): MessageSender {
	return {
		id: member.id,
		profileId: member.profile.id,
		name: member.profile.name,
		imageUrl: member.profile.imageUrl,
		email: member.profile.email,
		role: member.role,
	};
}

/**
 * ADAPTER: DM Profile -> UI Sender
 * Takes a raw Profile and adds a fake "GUEST" role.
 */
export function profileToSender(profile: ProfileBase): MessageSender {
	return {
		id: profile.id, // In DMs, MemberID = ProfileID
		profileId: profile.id,
		name: profile.name,
		imageUrl: profile.imageUrl,
		email: profile.email,
		role: MemberRole.GUEST, // DMs have no roles
	};
}
