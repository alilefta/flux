export const QUERY_KEYS = {
	// ✅ CHANNELS
	channel: {
		messages: (channelId: string) => ["channel_messages", channelId] as const,
		jump: (channelId: string, targetId: string) => ["channel_messages", channelId, "jump", targetId] as const,
		pinned: (channelId: string) => ["channel_pinned", channelId] as const,
	},

	// ✅ DIRECT MESSAGES
	dm: {
		messages: (conversationId: string) => ["direct_messages", conversationId] as const,
		jump: (conversationId: string, targetId: string) => ["direct_messages", conversationId, "jump", targetId] as const,
		pinned: (conversationId: string) => ["direct_pinned", conversationId] as const,
	},

	// ✅ SEARCH
	search: (contextId: string, term: string) => ["search", contextId, term] as const,
};
