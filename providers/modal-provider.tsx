"use client";

import { useEffect, useState } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { CreateChannelModal } from "@/components/modals/channel/create-channel-modal";
import { EditChannelModal } from "@/components/modals/channel/edit-channel-modal";
import { DeleteChannelModal } from "@/components/modals/channel/delete-channel-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import { EditServerModal } from "@/components/modals/server/edit-server-modal";
import { LeaveServerModal } from "@/components/modals/server/leave-server-modal";
import { DeleteServerModal } from "@/components/modals/server/delete-server-modal";
import { UserSettingsModal } from "@/components/modals/user/user-settings-modal";
import { MessageFileModal } from "@/components/modals/chat/message-file-modal";
import { ChatSearchModal } from "@/components/modals/chat/chat-search-modal";
import { useIsMounted } from "@/hooks/use-is-mounted";

export const ModalProvider = () => {
	const isMounted = useIsMounted();

	if (!isMounted) return null;

	return (
		<>
			{/* Server */}
			<CreateServerModal />
			<InviteModal />
			<EditServerModal />
			<LeaveServerModal />
			<DeleteServerModal />
			{/* Members  */}
			<MembersModal />
			<UserProfileModal />
			{/* Channels */}
			<CreateChannelModal />
			<EditChannelModal />
			<DeleteChannelModal />
			{/* Users */}
			<UserSettingsModal />
			<MessageFileModal />

			{/* Messages */}
			<ChatSearchModal />
		</>
	);
};
