"use client";

import { ChatHeader } from "./chat-header";
import { ChatMessagesHandle } from "./chat-messages";
import { ChatPinnedMessage } from "./chat-pinned-message";
import { MemberProfile } from "@/schemas/member";
import { memo, useCallback, useRef } from "react";
import { DirectChatMessages } from "./direct-chat-messages";
import { DirectChatInput } from "./direct-chat-input";
import { ConversationBase } from "@/schemas/conversation.base";
import { ProfileBase } from "@/schemas/profile";

interface ChatWrapperProps {
	conversation: ConversationBase;
	currentMember: MemberProfile;
	otherProfile: ProfileBase;
}

export const DMChatWrapper = memo(
	({ conversation, otherProfile, currentMember }: ChatWrapperProps) => {
		const chatMessagesRef = useRef<ChatMessagesHandle | null>(null);
		console.log("ChatWrapper rendered!");
		const handleJumpToMessage = useCallback((messageId: string) => {
			chatMessagesRef.current?.jumpToMessage(messageId);
		}, []);

		return (
			<>
				<ChatHeader member={currentMember} chatName={otherProfile.name} contextId={conversation.id} type="conversation" />
				<ChatPinnedMessage contextId={conversation.id} onJumpToMessage={handleJumpToMessage} type="conversation" />
				<DirectChatMessages ref={chatMessagesRef} conversationId={conversation.id} member={currentMember} name={otherProfile.name} />
				<DirectChatInput name={otherProfile.name} conversationId={conversation.id} placeholder="Type..." member={currentMember} />
			</>
		);
	},
	(prevProps, nextProps) => {
		// ✅ Only re-render if IDs change
		return prevProps.conversation.id === nextProps.conversation.id && prevProps.currentMember.id === nextProps.currentMember.id && prevProps.otherProfile.id === nextProps.otherProfile.id;
	},
);

DMChatWrapper.displayName = "DMChatWrapper";
