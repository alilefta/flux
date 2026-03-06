import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { getChannelById } from "@/data/channel";
import { getCurrentMemberByServerAndProfileId } from "@/data/member";
import { ChannelChatWrapper } from "@/components/chat/channel-chat-wrapper";
import { MobileToggle } from "@/components/mobile/mobile-toggle";

interface ChannelPageProps {
	params: Promise<{
		serverId: string;
		channelId: string;
	}>;
}

export default async function ChannelPage({ params }: ChannelPageProps) {
	const { serverId, channelId } = await params;
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}
	// Fetch Channel
	const channel = await getChannelById(channelId);

	// Fetch Member (Current User)
	const member = await getCurrentMemberByServerAndProfileId(serverId, profile.id);

	// 3. ✅ CRITICAL SECURITY CHECK
	// Ensure the channel exists, the member exists, AND the channel belongs to this server
	if (!channel || !member || channel.serverId !== serverId) {
		return redirect(`/servers/${serverId}`);
	}

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden w-full relative z-0">
			<ChannelChatWrapper channel={channel} member={member} serverId={serverId} mobileToggle={<MobileToggle serverId={serverId} />} />
		</div>
	);
}
