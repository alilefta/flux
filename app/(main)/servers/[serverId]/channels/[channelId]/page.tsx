import { redirect } from "next/navigation";
import { currentProfile } from "@/data/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { getChannelById } from "@/data/channel";
import { getCurrentMemberByServerAndProfileId } from "@/data/member";

interface ChannelPageProps {
	params: Promise<{
		serverId: string;
		channelId: string;
	}>;
}

export default async function ChannelPage({ params }: ChannelPageProps) {
	const { serverId, channelId } = await params;
	const profile = await currentProfile();

	if (!profile) return redirect("/");

	// Fetch Channel
	const channel = await getChannelById(channelId);

	// Fetch Member (Current User)
	const member = await getCurrentMemberByServerAndProfileId(serverId, profile.id);

	if (!channel || !member) return redirect("/");

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden w-full relative z-0">
			{/* 1. Header */}
			<ChatHeader serverId={serverId} name={channel.name} type="channel" />

			{/* 2. Messages */}
			<ChatMessages
				member={member}
				name={channel.name}
				chatId={channel.id}
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
			<ChatInput
				name={channel.name}
				type="channel"
				apiUrl="/api/socket/messages"
				query={{
					channelId: channel.id,
					serverId: serverId,
				}}
			/>
		</div>
	);
}
