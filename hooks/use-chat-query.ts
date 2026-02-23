"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { InferSafeActionFnResult } from "next-safe-action";
import { QUERY_KEYS } from "@/lib/query-keys";
import { getDirectMessagesAction } from "@/actions/direct-message";
import { handleSafeActionError } from "@/lib/safe-action-helpers";
import { ChatType } from "@/schemas/composed/shared.base";

interface UseChatQueryProps {
	channelId: string;
	serverId: string;
	type: ChatType;
	mode?: "chronological" | "around";
	targetMessageId?: string;
}

type GetMessagesResults = InferSafeActionFnResult<typeof getMessagesAction>;
type GetDirectMessagesResults = InferSafeActionFnResult<typeof getDirectMessagesAction>;

export function useChatQuery({ channelId, serverId, mode = "chronological", targetMessageId, type }: UseChatQueryProps) {
	// ✅ 1. Generate Key using Factory
	let queryKey: readonly unknown[];

	if (type === "channel") {
		queryKey = mode === "around" && targetMessageId ? QUERY_KEYS.channel.jump(channelId, targetMessageId) : QUERY_KEYS.channel.messages(channelId);
	} else {
		queryKey = mode === "around" && targetMessageId ? QUERY_KEYS.dm.jump(channelId, targetMessageId) : QUERY_KEYS.dm.messages(channelId);
	}

	console.log("🔑 Query Key:", queryKey, { mode, targetMessageId });

	return useInfiniteQuery({
		queryKey: queryKey,
		queryFn: async ({ pageParam }) => {
			console.log("📡 Fetching messages:", { mode, targetMessageId, cursor: pageParam });
			let result: GetMessagesResults | GetDirectMessagesResults;

			if (type === "conversation") {
				// ✅ Direct Message Fetch
				result = await getDirectMessagesAction({
					conversationId: channelId, // Reuse channelId prop as conversationId
					cursor: pageParam as Date | undefined,
					mode,
					targetMessageId,
				});
			} else {
				// ✅ Channel Message Fetch
				if (!serverId) throw new Error("Server ID missing for channel fetch");

				result = await getMessagesAction({
					channelId,
					serverId,
					cursor: pageParam as Date | undefined,
					mode,
					targetMessageId,
				});
			}

			if (!result?.data?.success) {
				handleSafeActionError<typeof getMessagesAction | typeof getDirectMessagesAction>({ serverError: result.serverError, validationErrors: result.validationErrors });
				throw new Error(result?.serverError || "Failed");
			}

			return result.data.messages;
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
