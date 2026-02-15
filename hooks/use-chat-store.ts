import { ChannelMessage } from "@/schemas/message";
import { create } from "zustand";

interface ChatStore {
	replyingTo: ChannelMessage | null;
	setReplyingTo: (info: ChannelMessage | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
	replyingTo: null,
	setReplyingTo: (message) => set({ replyingTo: message }),
}));
