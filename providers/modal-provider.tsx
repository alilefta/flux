"use client";

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
import { useModal } from "@/hooks/use-modal-store";

export const ModalProvider = () => {
	const isMounted = useIsMounted();
	const type = useModal((state) => state.type);

	if (!isMounted) return null;

	switch (type) {
		case "createServer":
			return <CreateServerModal />;
		case "invite":
			return <InviteModal />;
		case "editServer":
			return <EditServerModal />;
		case "leaveServer":
			return <LeaveServerModal />;
		case "deleteServer":
			return <DeleteServerModal />;
		case "members":
			return <MembersModal />;
		case "userProfile":
			return <UserProfileModal />;
		case "userSettings":
			return <UserSettingsModal />;
		case "createChannel":
			return <CreateChannelModal />;
		case "editChannel":
			return <EditChannelModal />;
		case "deleteChannel":
			return <DeleteChannelModal />;
		case "searchMessages":
			return <ChatSearchModal />;
		case "messageFile":
			return <MessageFileModal />;
		default:
			return null;
	}

	// return (
	// 	<>
	// 		{/* Server */}
	// 		<CreateServerModal />
	// 		<InviteModal />
	// 		<EditServerModal />
	// 		<LeaveServerModal />
	// 		<DeleteServerModal />
	// 		{/* Members  */}
	// 		<MembersModal />
	// 		<UserProfileModal />
	// 		{/* Channels */}
	// 		<CreateChannelModal />
	// 		<EditChannelModal />
	// 		<DeleteChannelModal />
	// 		{/* Users */}
	// 		<UserSettingsModal />
	// 		<MessageFileModal />

	// 		{/* Messages */}
	// 		<ChatSearchModal />
	// 	</>
	// );
};
