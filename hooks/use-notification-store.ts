import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotificationStore {
	// Map: conversationId -> count (or boolean)
	unreadDMs: Record<string, number>;
	addUnread: (conversationId: string) => void;
	clearUnread: (conversationId: string) => void;
}

export const useNotificationStore = create<NotificationStore>()(
	persist(
		(set) => ({
			unreadDMs: {},
			addUnread: (id) =>
				set((state) => ({
					unreadDMs: { ...state.unreadDMs, [id]: (state.unreadDMs[id] || 0) + 1 },
				})),
			clearUnread: (id) =>
				set((state) => {
					const newUnread = { ...state.unreadDMs };
					delete newUnread[id];
					return { unreadDMs: newUnread };
				}),
		}),
		{ name: "flux-notifications" }, // Persist to localStorage
	),
);
