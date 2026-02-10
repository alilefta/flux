"use client";

import { format } from "date-fns";
import { ChatItem } from "@/components/chat/chat-item";
import { Activity, Hash, Loader2, Terminal } from "lucide-react";
import { MemberProfile } from "@/schemas/member";
import { useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { useAction } from "next-safe-action/hooks";
import { InferSafeActionFnResult } from "next-safe-action";
import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { ChannelMessage } from "@/schemas/message";
import { MessageEvent } from "@/lib/events";
import { useParams, useSearchParams } from "next/navigation";
import EmojiPicker, { Theme } from "emoji-picker-react";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

interface ChatMessagesProps {
	name: string;
	member: MemberProfile;
	channelId: string;
	serverId: string;
	apiUrl: string;
	socketUrl: string;
	socketQuery: Record<string, string>;
	paramKey: "channelId" | "conversationId";
	paramValue: string;
	type: "channel" | "conversation";
}

type GetMessagesResults = InferSafeActionFnResult<typeof getMessagesAction>;

export const ChatMessages = ({ name, member, channelId, serverId }: ChatMessagesProps) => {
	const chatRef = useRef<HTMLDivElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);
	// const loadMoreRef = useRef<HTMLDivElement>(null);
	const queryClient = useQueryClient();
	const params = useSearchParams();
	const cursor = params.get("cursor") ?? undefined;

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

	// const { data, isLoading, error } = useQuery({
	// 	queryKey: ["messages", channelId],
	// 	queryFn: async () => {
	// 		const result: GetMessagesResults = await getMessages({ channelId, serverId });
	// 		if (!result?.data?.success) throw new Error(result?.serverError || "Failed");

	// 		return result.data.data.messages || [];
	// 	},
	// 	// refetchInterval: 5000, // Temporary polling until Socket.io is ready // removed polling, replaced with real-time notification using Pusher
	// });

	const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ["messages", channelId],
		queryFn: async ({ pageParam }) => {
			const result: GetMessagesResults = await getMessages({ channelId, serverId, cursor: pageParam });
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

	// useEffect(() => {
	// 	fetchNextPage();
	// }, [cursor]);

	// ✅ Pusher Subscription Effect
	useEffect(() => {
		// Subscribe to channel
		const channelName = `channel-${channelId}`;
		const channel = pusherClient.subscribe(channelName);

		// Listen for new messages
		channel.bind(MessageEvent.NEW, (newMessage: ChannelMessage) => {
			// Update query cache with new message
			queryClient.setQueryData(["messages", channelId], (oldMessages: ChannelMessage[] = []) => {
				// Check if message already exists (prevent duplicates)
				const exists = oldMessages.some((msg) => msg.id === newMessage.id);
				if (exists) return oldMessages;

				// Add new message to the end
				return [...oldMessages, newMessage];
			});
		});
		// Listen for message updates (edits)
		channel.bind(MessageEvent.UPDATE, (updatedMessage: ChannelMessage) => {
			queryClient.setQueryData(["messages", channelId], (oldMessages: ChannelMessage[] = []) => {
				return oldMessages.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg));
			});
		});

		// Listen for message deletions
		channel.bind(MessageEvent.DELETE, (deletedMessage: ChannelMessage) => {
			queryClient.setQueryData(["messages", channelId], (oldMessages: ChannelMessage[] = []) => {
				return oldMessages.map((msg) => (msg.id === deletedMessage.id ? deletedMessage : msg));
			});
		});

		// Cleanup on unmount or channel change
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [channelId, queryClient]);

	// Auto-scroll to bottom on load and when data changes
	useEffect(() => {
		if (bottomRef.current) {
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [data]);

	if (isLoading) {
		return (
			<div className="flex-1 flex items-center justify-center">
				<Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
			</div>
		);
	}

	if (error) {
		return <div className="flex-1 flex items-center justify-center text-zinc-500">Failed to load messages. Please refresh.</div>;
	}

	const messages = data?.pages.flat() || [];

	// useEffect(() => {
	// 	console.log(queryClient.getQueryData(["messages", channelId]));
	// }, [messages]);

	return (
		<div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto no-scrollbar relative">
			{isFetchingNextPage ? <Loader2 className="animate-spin w-4 h-4" /> : <button onClick={() => fetchNextPage()}>Load More</button>}

			{/* 1. Spacer to push messages to bottom if few */}
			<div className="flex-1" />

			{/* 2. Welcome Message */}
			<div className="px-6 pb-6 pt-10">
				<div className="h-16 w-16 rounded-3xl bg-white/10 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
					<Hash className="h-8 w-8 text-white" />
				</div>
				<h3 className="text-3xl font-bold text-white tracking-tight">Welcome to #{name}</h3>
				<p className="text-zinc-400 text-base mt-2">
					This is the start of the <span className="text-indigo-400 font-bold">#{name}</span> channel.
				</p>
			</div>
			<div className="w-full h-px bg-white/5 my-2 mx-6" />

			{/* 2. Message List */}
			<div className="flex flex-col mt-auto gap-1 min-w-0 w-full">
				{messages.map((message) => (
					<ChatItem
						key={message.id}
						id={message.id}
						currentMember={member}
						member={message.member}
						content={message.content}
						fileUrl={message.fileUrl}
						deleted={message.deleted}
						timestamp={format(new Date(message.createdAt), DATE_FORMAT)}
						isUpdated={message.edited}
						socketUrl=""
						socketQuery={{}}
						channelId={channelId} // ✅ Pass this if ChatItem needs it for mutations
					/>
				))}
				{/* Invisible div to scroll to */}
				<div ref={bottomRef} />
			</div>
		</div>
	);
};
