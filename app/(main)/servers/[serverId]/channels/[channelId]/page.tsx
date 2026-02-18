import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { getChannelById } from "@/data/channel";
import { getCurrentMemberByServerAndProfileId } from "@/data/member";
import { ChatPinnedMessage } from "@/components/chat/chat-pinned-message";

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
			{/* 1. Header */}
			<ChatHeader serverId={serverId} channel={channel} member={member} />
			{/* 2. ✅ PINNED MESSAGE BAR */}
			<ChatPinnedMessage channelId={channel.id} />
			{/* 2. Messages */}
			<ChatMessages
				serverId={serverId}
				member={member}
				name={channel.name}
				channelId={channel.id}
				type="channel"
				apiUrl="/api/messages"
				socketUrl="/api/socket/messages"
				socketQuery={{
					channelId: channel.id,
					serverId: serverId,
				}}
				paramKey="channelId"
				paramValue={channel.id}
			/>

			{/* 3. Input */}
			<ChatInput name={channel.name} channelId={channel.id} placeholder="Type..." member={member} />
		</div>
	);
}
