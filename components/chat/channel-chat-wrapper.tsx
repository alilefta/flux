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
	mobileToggle: React.ReactNode;
}

export const ChannelChatWrapper = memo(
	({ serverId, channel, member, mobileToggle }: ChatWrapperProps) => {
		const chatMessagesRef = useRef<ChatMessagesHandle | null>(null);
		console.log("ChatWrapper rendered!");
		const handleJumpToMessage = useCallback((messageId: string) => {
			chatMessagesRef.current?.jumpToMessage(messageId);
		}, []);

		return (
			<>
				<ChatHeader serverId={serverId} member={member} chatName={channel.name} contextId={channel.id} type="channel" toggle={mobileToggle} />{" "}
				<ChatPinnedMessage contextId={channel.id} onJumpToMessage={handleJumpToMessage} type="channel" />
				<ChatMessages ref={chatMessagesRef} serverId={serverId} member={member} name={channel.name} channelId={channel.id} />
				<ChatInput name={channel.name} channelId={channel.id} placeholder="Type..." member={member} />
			</>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.serverId === nextProps.serverId && prevProps.channel.id === nextProps.channel.id && prevProps.member.id === nextProps.member.id;
	},
);

ChannelChatWrapper.displayName = "ChannelChatWrapper";
