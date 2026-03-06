import { ChannelType } from "@/generated/prisma/enums";
import { ChannelBase } from "@/schemas/channel";
import { ServerDetails } from "@/schemas/composed/server.details";
import { MessageSender } from "@/schemas/composed/shared.base";
import { ProfileBase } from "@/schemas/profile";
import { create } from "zustand";

export type ModalType =
	| "createServer"
	| "invite"
	| "editServer"
	| "members"
	| "createChannel"
	| "leaveServer"
	| "deleteServer"
	| "deleteChannel"
	| "editChannel"
	| "messageFile"
	| "searchMessages"
	| "deleteMessage"
	| "userProfile"
	| "userSettings";

interface ModalData {
	server?: ServerDetails;
	channel?: ChannelBase;
	channelType?: ChannelType;
	apiUrl?: string;
	query?: Record<string, unknown>;
	sender?: MessageSender;
	profile?: ProfileBase;
	serverId?: string;
	// isOwnProfile?: boolean;
	// currentProfileId?: string;
}

interface ModalStore {
	type: ModalType | null;
	data: ModalData;
	isOpen: boolean;
	onOpen: (type: ModalType, data?: ModalData) => void;
	onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
	type: null,
	data: {},
	isOpen: false,
	onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
	onClose: () => set({ type: null, isOpen: false }),
}));
