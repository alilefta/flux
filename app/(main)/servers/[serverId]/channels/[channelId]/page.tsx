import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { getChannelById } from "@/data/channel";
import { getCurrentMemberByServerAndProfileId } from "@/data/member";
import { ChatWrapper } from "@/components/chat/chat-wrapper";

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

	if (!channel || !member) return redirect(`/servers/${serverId}`);

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden w-full relative z-0">
			<ChatWrapper channel={channel} member={member} serverId={serverId} />
		</div>
	);
}
