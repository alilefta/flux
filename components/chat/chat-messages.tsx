"use client";

import { Message } from "@/schemas/message";
import { Profile } from "@/schemas/profile";
import { format } from "date-fns";
import { ChatItem } from "@/components/chat/chat-item";
import { Hash } from "lucide-react";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

interface ChatMessagesProps {
	name: string;
	member: Profile;
	chatId: string;
	apiUrl: string;
	socketUrl: string;
	socketQuery: Record<string, string>;
	paramKey: "channelId" | "conversationId";
	paramValue: string;
	type: "channel" | "conversation";
}

// Dummy Messages Data (Move this to dummy-data.ts later if you want)
const MOCK_MESSAGES: Message[] = [
	{
		id: "msg-1",
		content: "Has anyone seen the new Figma update? The variables feature is insane.",
		memberId: "user-2",
		member: {
			id: "user-2",
			name: "Sarah Design",
			imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			email: "sarah@test.com",
			status: "ONLINE",
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		deleted: false,
	},
	{
		id: "msg-2",
		content: "Yeah, I'm already refactoring our design system to use it. It's going to save us so much time on dark mode tokens.",
		memberId: "user-1", // This matches current user ID in dummy data
		member: {
			id: "user-1",
			name: "shadcn-fan",
			imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			email: "dev@flux.app",
			status: "ONLINE",
		},
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
		deleted: false,
	},
];

export const ChatMessages = ({ name, member, chatId, apiUrl, socketUrl, socketQuery, paramKey, paramValue, type }: ChatMessagesProps) => {
	return (
		<div className="flex-1 flex flex-col py-4 overflow-y-auto custom-scrollbar">
			{/* 1. Spacer to push messages to bottom if few */}
			<div className="flex-1" />

			{/* 2. Welcome Message */}
			<div className="px-6 pb-8 mb-4 border-b border-white/5">
				<div className="h-[75px] w-[75px] rounded-full bg-white/10 flex items-center justify-center mb-4">
					<Hash className="h-12 w-12 text-white" />
				</div>
				<h3 className="text-2xl font-bold text-white">Welcome to #{name}</h3>
				<p className="text-zinc-400 text-sm mt-1">This is the start of the #{name} channel.</p>
			</div>

			{/* 3. Message List */}
			<div className="flex flex-col-reverse mt-auto">
				{MOCK_MESSAGES.map((message) => (
					<ChatItem
						key={message.id}
						id={message.id}
						currentMember={member}
						member={message.member}
						content={message.content}
						fileUrl={null}
						deleted={message.deleted}
						timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
						isUpdated={message.updatedAt !== message.createdAt}
						socketUrl={socketUrl}
						socketQuery={socketQuery}
					/>
				))}
			</div>
		</div>
	);
};
