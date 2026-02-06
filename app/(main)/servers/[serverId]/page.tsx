import { currentProfile, dummyServers } from "@/lib/dummy-data";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";

interface ServerPageProps {
	params: Promise<{
		serverId: string;
	}>;
}

export default async function ServerPage({ params }: ServerPageProps) {
	// 1. Fetch Server & Channel (Mock Logic)
	// In real app: await db.server.findUnique(...)
	const { serverId } = await params;
	const server = dummyServers.find((s) => s.id === serverId) || dummyServers[0];
	const channel = server.categories?.[0].channels[0]; // Default to first channel

	if (!channel) return null;

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden w-full relative z-0">
			{/* 1. Header */}
			<ChatHeader serverId={server.id} name={channel.name} type="channel" />

			{/* 2. Messages Area */}
			{/* We pass dummy socket props for now */}
			<ChatMessages
				member={currentProfile}
				name={channel.name}
				chatId={channel.id}
				type="channel"
				apiUrl="/api/messages"
				socketUrl="/api/socket/messages"
				socketQuery={{
					channelId: channel.id,
					serverId: server.id,
				}}
				paramKey="channelId"
				paramValue={channel.id}
			/>

			{/* 3. Input Area */}
			<ChatInput placeholder={`Message #${channel.name}`} />
		</div>
	);
}
