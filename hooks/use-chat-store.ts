import { ReplyMessageUI } from "@/schemas/composed/shared.base";
import { create } from "zustand";

interface ChatStore {
	replyingTo: ReplyMessageUI | null;
	setReplyingTo: (info: ReplyMessageUI | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
	replyingTo: null,
	setReplyingTo: (message) => set({ replyingTo: message }),
}));
