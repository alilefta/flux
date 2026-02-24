"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { getDirectMessagesAction } from "@/actions/direct-message";
import { QUERY_KEYS } from "@/lib/query-keys";
import { handleSafeActionError } from "@/lib/safe-action-helpers";
import { ChannelMessage } from "@/schemas/message";
import { DirectChatMessage } from "@/schemas/composed/direct-message.details";

// ✅ OPTION 1: Separate hooks (RECOMMENDED)
// This gives you perfect type safety with no unions

interface UseChannelMessagesQueryProps {
	channelId: string;
	serverId: string;
	type: "channel";
	mode?: "chronological" | "around";
	targetMessageId?: string;
}

interface UseDirectMessagesQueryProps {
	conversationId: string;
	type: "conversation";
	mode?: "chronological" | "around";
	targetMessageId?: string;
}

// ✅ Hook for Channel Messages
export function useChannelMessagesQuery({ channelId, serverId, mode = "chronological", targetMessageId }: Omit<UseChannelMessagesQueryProps, "type">) {
	const queryKey = mode === "around" && targetMessageId ? QUERY_KEYS.channel.jump(channelId, targetMessageId) : QUERY_KEYS.channel.messages(channelId);

	console.log("🔑 Channel Query Key:", queryKey, { mode, targetMessageId });

	return useInfiniteQuery({
		queryKey,
		queryFn: async ({ pageParam }) => {
			console.log("📡 Fetching channel messages:", { mode, targetMessageId, cursor: pageParam });

			const result = await getMessagesAction({
				channelId,
				serverId,
				cursor: pageParam as Date | undefined,
				mode,
				targetMessageId,
			});

			if (!result?.data?.success) {
				handleSafeActionError<typeof getMessagesAction>({
					serverError: result.serverError,
					validationErrors: result.validationErrors,
				});
				throw new Error(result?.serverError || "Failed to fetch messages");
			}

			// ✅ Type is guaranteed to be ChannelMessage[]
			return result.data.messages as ChannelMessage[];
		},
		initialPageParam: undefined as Date | undefined,
		getNextPageParam: (lastPage) => {
			if (!lastPage || lastPage.length === 0) return undefined;
			const oldestMessage = lastPage[lastPage.length - 1];
			return oldestMessage.createdAt;
		},
		notifyOnChangeProps: ["data", "error", "status", "hasNextPage", "isFetchingNextPage"],
		refetchOnMount: mode === "chronological",
		refetchOnWindowFocus: mode === "chronological",
		staleTime: mode === "around" ? Infinity : 0,
	});
}

// ✅ Hook for Direct Messages
export function useDirectMessagesQuery({ conversationId, mode = "chronological", targetMessageId }: Omit<UseDirectMessagesQueryProps, "type">) {
	const queryKey = mode === "around" && targetMessageId ? QUERY_KEYS.dm.jump(conversationId, targetMessageId) : QUERY_KEYS.dm.messages(conversationId);

	console.log("🔑 DM Query Key:", queryKey, { mode, targetMessageId });

	return useInfiniteQuery({
		queryKey,
		queryFn: async ({ pageParam }) => {
			console.log("📡 Fetching direct messages:", { mode, targetMessageId, cursor: pageParam });

			const result = await getDirectMessagesAction({
				conversationId,
				cursor: pageParam as Date | undefined,
				mode,
				targetMessageId,
			});

			if (!result?.data?.success) {
				handleSafeActionError<typeof getDirectMessagesAction>({
					serverError: result.serverError,
					validationErrors: result.validationErrors,
				});
				throw new Error(result?.serverError || "Failed to fetch messages");
			}

			// ✅ Type is guaranteed to be DirectChatMessage[]
			return result.data.messages as DirectChatMessage[];
		},
		initialPageParam: undefined as Date | undefined,
		getNextPageParam: (lastPage) => {
			if (!lastPage || lastPage.length === 0) return undefined;
			const oldestMessage = lastPage[lastPage.length - 1];
			return oldestMessage.createdAt;
		},
		notifyOnChangeProps: ["data", "error", "status", "hasNextPage", "isFetchingNextPage"],
		refetchOnMount: mode === "chronological",
		refetchOnWindowFocus: mode === "chronological",
		staleTime: mode === "around" ? Infinity : 0,
	});
}

// ===================================================================
// ✅ OPTION 2: Single unified hook with discriminated union (if you prefer)
// ===================================================================

// type UseChatQueryProps = UseChannelMessagesQueryProps | UseDirectMessagesQueryProps;

// export function useChatQuery(props: UseChatQueryProps) {
// 	if (props.type === "channel") {
// 		// ✅ TypeScript knows serverId exists here
// 		return useChannelMessagesQuery({
// 			channelId: props.channelId,
// 			serverId: props.serverId,
// 			mode: props.mode,
// 			targetMessageId: props.targetMessageId,
// 		});
// 	} else {
// 		// ✅ TypeScript knows conversationId exists here
// 		return useDirectMessagesQuery({
// 			conversationId: props.conversationId,
// 			mode: props.mode,
// 			targetMessageId: props.targetMessageId,
// 		});
// 	}
// }

// ===================================================================
// Usage Examples:
// ===================================================================

// In ChatMessages (Channel):
// const { data, isLoading, ... } = useChannelMessagesQuery({
//   channelId,
//   serverId,
//   mode: jumpMode.active ? "around" : "chronological",
//   targetMessageId: jumpMode.targetMessageId,
// });

// In DirectChatMessages (DM):
// const { data, isLoading, ... } = useDirectMessagesQuery({
//   conversationId,
//   mode: jumpMode.active ? "around" : "chronological",
//   targetMessageId: jumpMode.targetMessageId,
// });

// OR use the unified hook:
// const { data, isLoading, ... } = useChatQuery({
//   type: "channel",
//   channelId,
//   serverId,
//   mode,
//   targetMessageId,
// });
