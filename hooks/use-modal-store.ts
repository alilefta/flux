import { ChannelType } from "@/generated/prisma/enums";
import { ChannelBase } from "@/schemas/channel";
import { MemberProfile } from "@/schemas/member";
import { PublicProfile } from "@/schemas/profile";
import { ServerBase } from "@/schemas/server.base";
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
	| "deleteMessage"
	| "userProfile"
	| "userSettings";

interface ModalData {
	server?: ServerBase;
	channel?: ChannelBase;
	channelType?: ChannelType;
	apiUrl?: string;
	query?: Record<string, unknown>;
	member?: MemberProfile;
	profile?: PublicProfile;
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
