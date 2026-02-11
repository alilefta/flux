"use client";

import { differenceInCalendarDays, format } from "date-fns";
import { ChatItem } from "@/components/chat/chat-item";
import { Hash, Loader2 } from "lucide-react";
import { MemberProfile } from "@/schemas/member";
import { useInfiniteQuery, useQueryClient, InfiniteData } from "@tanstack/react-query";
import { getMessagesAction } from "@/actions/message";
import { useAction } from "next-safe-action/hooks";
import { InferSafeActionFnResult } from "next-safe-action";
import { toast } from "sonner";
import { Fragment, useEffect, useRef, useState } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { ChannelMessage } from "@/schemas/message";
import { MessageEvent } from "@/lib/events";
import { ChatDateSeparator } from "./chat-date-seperator";

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
type QueryDataShape = InfiniteData<ChannelMessage[], (Date | undefined)[]>;

export const ChatMessages = ({ name, member, channelId, serverId }: ChatMessagesProps) => {
	const chatRef = useRef<HTMLDivElement>(null);
	const bottomRef = useRef<HTMLDivElement>(null);
	const topRef = useRef<HTMLDivElement>(null);
	const queryClient = useQueryClient();
	const [newMessageCount, setNewMessageCount] = useState(0);
	const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

	const firstPageCountRef = useRef<number>(0); // to prevent auto-scroll on loading older messages

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

	const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
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

	// ✅ Intersection Observer for auto-load
	useEffect(() => {
		if (!topRef.current || !hasNextPage) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;

				// When top div becomes visible, load more
				if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
					fetchNextPage();
				}
			},
			{
				root: chatRef.current, // Watch within chat container
				threshold: 1.0, // Trigger when fully visible
			},
		);

		observer.observe(topRef.current);

		return () => {
			if (topRef.current) {
				observer.unobserve(topRef.current);
			}
		};
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	// ✅ Pusher Subscription Effect
	useEffect(() => {
		// Subscribe to channel
		const channelName = `channel-${channelId}`;
		const channel = pusherClient.subscribe(channelName);

		// Listen for new messages
		channel.bind(MessageEvent.NEW, (newMessage: ChannelMessage) => {
			// Update query cache with new message
			queryClient.setQueryData(["messages", channelId], (oldData: QueryDataShape): QueryDataShape => {
				if (!oldData?.pages) return oldData;

				const newPages = [...oldData.pages];

				// Remove ALL optimistic messages from this member
				// (Handles edge case of rapid sends)
				newPages[0] = newPages[0].filter((m) => !(m.id.startsWith("optimistic-") && m.memberId === newMessage.memberId));

				// Check if real message already exists (prevent duplicates)
				const exists = newPages[0].some((m) => m.id === newMessage.id);
				if (!exists) {
					newPages[0] = [newMessage, ...newPages[0]];
				}

				return { ...oldData, pages: newPages };
			});

			// // Increment badge count if we are not at bottom
			// if (!shouldAutoScroll) {
			// 	setNewMessageCount((prev) => prev + 1);
			// }
		});
		// Listen for message updates (edits)
		channel.bind(MessageEvent.UPDATE, (updatedMessage: ChannelMessage) => {
			queryClient.setQueryData(["messages", channelId], (oldData: QueryDataShape): QueryDataShape => {
				if (!oldData.pages) return oldData;

				const newPages = oldData.pages.map((page: ChannelMessage[]) => page.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg)));

				return {
					...oldData,
					pages: newPages,
				};
			});
		});

		// Listen for message deletions
		channel.bind(MessageEvent.DELETE, (deletedMessage: ChannelMessage) => {
			queryClient.setQueryData(["messages", channelId], (oldData: QueryDataShape) => {
				if (!oldData?.pages) return oldData;

				const newPages = oldData.pages.map((page: ChannelMessage[]) => page.map((msg) => (msg.id === deletedMessage.id ? deletedMessage : msg)));

				return {
					...oldData,
					pages: newPages,
				};
			});
		});

		// Cleanup on unmount or channel change
		return () => {
			channel.unbind_all();
			channel.unsubscribe();
			pusherClient.unsubscribe(channelName);
		};
	}, [channelId, queryClient]);

	// Detect if user is scrolled to bottom
	useEffect(() => {
		const chatContainer = chatRef.current;
		if (!chatContainer) return;

		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = chatContainer;
			const isAtBottom = scrollHeight - scrollTop - clientHeight < 100; // Within 100px of bottom

			setShouldAutoScroll(isAtBottom);
		};

		chatContainer.addEventListener("scroll", handleScroll);
		return () => chatContainer.removeEventListener("scroll", handleScroll);
	}, []);

	// ✅ Smart auto-scroll
	useEffect(() => {
		if (!data?.pages?.[0]) return;

		const currentFirstPageCount = data.pages[0].length;
		const previousFirstPageCount = firstPageCountRef.current;

		// Check if first page grew (new message added)
		const hasNewMessage = currentFirstPageCount > previousFirstPageCount;

		if (hasNewMessage && shouldAutoScroll && bottomRef.current) {
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}

		// Update ref
		firstPageCountRef.current = currentFirstPageCount;
	}, [data, shouldAutoScroll]);

	useEffect(() => {
		if (!chatRef.current || !isFetchingNextPage) return;

		const chatContainer = chatRef.current;
		const previousScrollHeight = chatContainer.scrollHeight;

		// After new messages load, adjust scroll to maintain position
		const adjustScroll = () => {
			const newScrollHeight = chatContainer.scrollHeight;
			const heightDifference = newScrollHeight - previousScrollHeight;

			if (heightDifference > 0) {
				chatContainer.scrollTop += heightDifference;
			}
		};

		// Wait for DOM to update
		const timer = setTimeout(adjustScroll, 0);
		return () => clearTimeout(timer);
	}, [isFetchingNextPage]);

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

	const messages = data?.pages.flat().reverse() || [];

	// useEffect(() => {
	// 	console.log(queryClient.getQueryData(["messages", channelId]));
	// }, [messages]);

	return (
		<div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto no-scrollbar relative">
			{/* ✅ Divider - ONLY if welcome message shown */}
			{!hasNextPage && <div className="w-full h-px bg-white/5 my-2 mx-6" />}

			{hasNextPage && <div ref={topRef} className="h-1 w-full" />}

			{/* 1. Spacer to push messages to bottom if few */}
			<div className="flex-1" />

			{/* ✅ Welcome - only if no more pages */}
			{!hasNextPage && (
				<>
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
				</>
			)}

			{isFetchingNextPage && (
				<div className="flex justify-center py-2">
					<Loader2 className="animate-spin w-4 h-4" />
				</div>
			)}

			{/* 2. Message List */}
			<div className="flex flex-col mt-auto gap-1 min-w-0 w-full">
				{messages.map((message, index) => {
					// Standardize dates
					const currentDate = new Date(message.createdAt);
					const prevMessage = messages[index - 1];
					const prevDate = prevMessage ? new Date(prevMessage.createdAt) : null;

					const showSeparator = !prevDate || differenceInCalendarDays(currentDate, prevDate) > 0;

					return (
						<Fragment key={message.id}>
							{showSeparator && <ChatDateSeparator date={currentDate} />}

							<ChatItem
								id={message.id}
								currentMember={member}
								member={message.member}
								content={message.content}
								fileUrl={message.fileUrl}
								deleted={message.deleted}
								timestamp={format(currentDate, DATE_FORMAT)}
								isUpdated={message.edited}
								socketUrl=""
								socketQuery={{}}
								channelId={channelId}
							/>
						</Fragment>
					);
				})}

				{/* ✅ Floating "New Messages" button */}
				{newMessageCount > 0 && (
					<button
						onClick={() => {
							bottomRef.current?.scrollIntoView({ behavior: "smooth" });
							setNewMessageCount(0);
						}}
						className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-indigo-600/80 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition z-50"
					>
						{newMessageCount} new message{newMessageCount > 1 ? "s" : ""}
					</button>
				)}
				{/* Invisible div to scroll to */}
				<div ref={bottomRef} />
			</div>
		</div>
	);
};
