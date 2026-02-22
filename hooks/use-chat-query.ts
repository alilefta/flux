"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { toast } from "sonner";
import { InferSafeActionFnResult } from "next-safe-action";

interface UseChatQueryProps {
	channelId: string;
	serverId: string;
	mode?: "chronological" | "around";
	targetMessageId?: string;
}

type GetMessagesResults = InferSafeActionFnResult<typeof getMessagesAction>;

export function useChatQuery({ channelId, serverId, mode = "chronological", targetMessageId }: UseChatQueryProps) {
	console.log("useChatQuery requested!");

	const handleActionError = (error: { serverError?: GetMessagesResults["serverError"]; validationErrors?: GetMessagesResults["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("An error occured while processing your input.");

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error("An error occured");
		}
	};

	// ✅ CRITICAL: Different query key based on mode
	const queryKey = mode === "around" && targetMessageId ? ["messages", channelId, "jump", targetMessageId] : ["messages", channelId];
	console.log("🔑 Query Key:", queryKey, { mode, targetMessageId });

	return useInfiniteQuery({
		queryKey: queryKey,
		queryFn: async ({ pageParam }) => {
			console.log("📡 Fetching messages:", { mode, targetMessageId, cursor: pageParam });

			const result: GetMessagesResults = await getMessagesAction({
				channelId,
				serverId,
				cursor: pageParam,
				mode,
				targetMessageId,
			});
			if (!result?.data?.success) {
				handleActionError({
					serverError: result.serverError,
					validationErrors: result.validationErrors,
				});
				throw new Error(result?.serverError || "Failed");
			}

			return result.data.messages;
		},
		initialPageParam: undefined as Date | undefined,
		getNextPageParam: (lastPage) => {
			if (lastPage.length === 0) return undefined;

			const oldestMessage = lastPage[lastPage.length - 1];
			return oldestMessage.createdAt;
		},
		notifyOnChangeProps: ["data", "error", "isLoading", "isFetchingNextPage"],
		refetchOnMount: mode === "chronological",
		refetchOnWindowFocus: mode === "chronological",
		staleTime: mode === "around" ? Infinity : 0,
	});
}
