"use client";

import { ChatHeader } from "./chat-header";
import { ChatPinnedMessage } from "./chat-pinned-message";
import { MemberProfile } from "@/schemas/member";
import { memo, useCallback, useEffect, useRef } from "react";
import { ChatMessagesHandle, DirectChatMessages } from "./direct-chat-messages";
import { DirectChatInput } from "./direct-chat-input";
import { ConversationBase } from "@/schemas/conversation.base";
import { ProfileBase } from "@/schemas/profile";
import { useNotificationStore } from "@/hooks/use-notification-store";

interface ChatWrapperProps {
	conversation: ConversationBase;
	currentMember: MemberProfile;
	otherProfile: ProfileBase;
	mobileToggle: React.ReactNode;
}

export const DMChatWrapper = memo(
	({ conversation, otherProfile, currentMember, mobileToggle }: ChatWrapperProps) => {
		const chatMessagesRef = useRef<ChatMessagesHandle | null>(null);
		console.log("ChatWrapper rendered!");
		const clearUnread = useNotificationStore((state) => state.clearUnread);

		const handleJumpToMessage = useCallback((messageId: string) => {
			chatMessagesRef.current?.jumpToMessage(messageId);
		}, []);

		// ✅ Clear notification when this page mounts
		useEffect(() => {
			clearUnread(conversation.id);
		}, [conversation.id, clearUnread]);

		console.log("currentMember:", currentMember, "otherProfile:", otherProfile);
		return (
			<>
				<ChatHeader member={currentMember} chatName={otherProfile.name} contextId={conversation.id} type="conversation" imageUrl={otherProfile.imageUrl ?? undefined} toggle={mobileToggle} />
				<ChatPinnedMessage contextId={conversation.id} onJumpToMessage={handleJumpToMessage} type="conversation" />
				<DirectChatMessages ref={chatMessagesRef} conversationId={conversation.id} member={currentMember} otherProfile={otherProfile} />
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
