import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { MemberProfile } from "@/schemas/member";
import { DMChatWrapper } from "@/components/chat/dm-chat-wrapper";
import { findConversationById } from "@/data/conversation";

interface ConversationIdPageProps {
	params: Promise<{
		conversationId: string;
	}>;
}

export default async function ConversationIdPage({ params }: ConversationIdPageProps) {
	const { conversationId } = await params;
	const profile = await getCurrentProfile();

	if (!profile) return redirect("/sign-in");

	const conversation = await findConversationById(conversationId);

	// 2. Validate Membership
	if (!conversation || (conversation.memberOneId !== profile.id && conversation.memberTwoId !== profile.id)) {
		return redirect("/conversations");
	}

	// 3. Determine "Other Person"
	const { memberOne, memberTwo } = conversation;
	const otherProfile = memberOne.id === profile.id ? memberTwo : memberOne;

	// 4. Construct currentMember object (Mocking MemberProfile for ChatHeader/Input)
	// Since we are in DMs, we don't have a "Member" record, but our components might expect one.
	// Best to use the Adapters we built.
	const currentMember: MemberProfile = {
		id: profile.id, // In DM, MemberID = ProfileID
		profileId: profile.id,
		profile: profile,
		role: "GUEST", // Dummy role
		createdAt: new Date(),
		updatedAt: new Date(),
		serverId: "dm",
	};

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden w-full relative z-0">
			<DMChatWrapper conversation={conversation} currentMember={currentMember} otherProfile={otherProfile} />;
		</div>
	);
}
