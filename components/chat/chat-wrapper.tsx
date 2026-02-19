"use client";

import { ChannelBase } from "@/schemas/channel";
import { ChatHeader } from "./chat-header";
import { ChatMessages, ChatMessagesHandle } from "./chat-messages";
import { ChatPinnedMessage } from "./chat-pinned-message";
import { MemberProfile } from "@/schemas/member";
import { memo, useCallback, useRef } from "react";
import { ChatInput } from "./chat-input";

interface ChatWrapperProps {
	serverId: string;
	channel: ChannelBase;
	member: MemberProfile;
}

export const ChatWrapper = memo(
	({ serverId, channel, member }: ChatWrapperProps) => {
		const chatMessagesRef = useRef<ChatMessagesHandle | null>(null);
		console.log("ChatWrapper rendered!");
		const handleJumpToMessage = useCallback((messageId: string) => {
			chatMessagesRef.current?.jumpToMessage(messageId);
		}, []);
		return (
			<>
				<ChatHeader serverId={serverId} channel={channel} member={member} />
				<ChatPinnedMessage channelId={channel.id} onJumpToMessage={handleJumpToMessage} />
				<ChatMessages ref={chatMessagesRef} serverId={serverId} member={member} name={channel.name} channelId={channel.id} type="channel" />
				<ChatInput name={channel.name} channelId={channel.id} placeholder="Type..." member={member} />
			</>
		);
	},
	(prevProps, nextProps) => {
		// ✅ Only re-render if IDs change
		return prevProps.serverId === nextProps.serverId && prevProps.channel.id === nextProps.channel.id && prevProps.member.id === nextProps.member.id;
	},
);

ChatWrapper.displayName = "ChatWrapper";
