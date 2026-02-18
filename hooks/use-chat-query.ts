"use client";

import { useInfiniteQuery, useQueryClient, InfiniteData } from "@tanstack/react-query";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useMemo } from "react";
import { getMessagesAction } from "@/actions/message";
import { pusherClient } from "@/lib/pusher-client";
import { MessageEvent } from "@/lib/events";
import { ChannelMessage, MessageReaction } from "@/schemas/message";
import { toast } from "sonner";
import { InferSafeActionFnResult } from "next-safe-action";

interface UseChatQueryProps {
	channelId: string;
	serverId: string;
	mode?: "chronological" | "around";
	targetMessageId?: string;
}

type GetMessagesResults = InferSafeActionFnResult<typeof getMessagesAction>;
type QueryDataShape = InfiniteData<ChannelMessage[], Date | undefined>;

export function useChatQuery({ channelId, serverId, mode = "chronological", targetMessageId }: UseChatQueryProps) {
	const { executeAsync: getMessages } = useAction(getMessagesAction, {
		onSuccess() {},
		onError(e) {
			handleActionError(e.error);
		},
	});

	const handleActionError = (error: { serverError?: GetMessagesResults["serverError"]; validationErrors?: GetMessagesResults["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("An error occured while processing your input.");

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error("An error occured");
		}
	};
	return useInfiniteQuery({
		queryKey: ["messages", channelId],
		queryFn: async ({ pageParam }) => {
			const result: GetMessagesResults = await getMessages({
				channelId,
				serverId,
				cursor: pageParam,
				mode,
				targetMessageId,
			});
			if (!result?.data?.success) throw new Error(result?.serverError || "Failed");

			return result.data.messages;
		},
		initialPageParam: undefined as Date | undefined,
		getNextPageParam: (lastPage) => {
			if (lastPage.length === 0) return undefined;

			const oldestMessage = lastPage[lastPage.length - 1];
			return oldestMessage.createdAt;
		},
	});
}
