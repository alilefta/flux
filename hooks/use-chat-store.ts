import { DirectChatMessage } from "@/schemas/composed/direct-message.details";
import { ChannelMessage } from "@/schemas/message";
import { create } from "zustand";

interface ChatStore {
	replyingTo: ChannelMessage | DirectChatMessage | null;
	setReplyingTo: (info: ChannelMessage | DirectChatMessage | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
	replyingTo: null,
	setReplyingTo: (message) => set({ replyingTo: message }),
}));
