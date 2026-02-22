"use client";

import { differenceInCalendarDays, format } from "date-fns";
import { ChatItem } from "@/components/chat/chat-item";
import { ArrowDown, Hash, Loader2 } from "lucide-react";
import { MemberProfile } from "@/schemas/member";
import { forwardRef, Fragment, memo, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { ChannelMessage, MessageReaction } from "@/schemas/message";
import { MessageEvent } from "@/lib/events";
import { ChatDateSeparator } from "./chat-date-seperator";
import { useChatScroll } from "@/hooks/use-chat-scroll";
import { useChatQuery } from "@/hooks/use-chat-query";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const DATE_FORMAT = "d MMM yyyy, HH:mm";

interface ChatMessagesProps {
	name: string;
	member: MemberProfile;
	channelId: string;
	serverId: string;
	type?: "channel" | "conversation";
}

type QueryDataShape = InfiniteData<ChannelMessage[], Date | undefined>;

// ✅ Export handle type for parent components
export interface ChatMessagesHandle {
	jumpToMessage: (messageId: string) => void;
}

// ✅ Add whyDidYouRender tracking
// function useWhyDidYouRender(componentName: string, props: any) {
// 	const previousProps = useRef<any | null>(null);

// 	useEffect(() => {
// 		if (previousProps.current) {
// 			const allKeys = Object.keys({ ...previousProps.current, ...props });
// 			const changedProps: any = {};

// 			allKeys.forEach((key) => {
// 				if (previousProps.current[key] !== props[key]) {
// 					changedProps[key] = {
// 						from: previousProps.current[key],
// 						to: props[key],
// 					};
// 				}
// 			});

// 			if (Object.keys(changedProps).length > 0) {
// 				console.log(`🔍 ${componentName} re-rendered because:`, changedProps);
// 			}
// 		}

// 		previousProps.current = props;
// 	});
// }
export const ChatMessages = memo(
	forwardRef<ChatMessagesHandle, ChatMessagesProps>((props, ref) => {
		const { name, member, channelId, serverId } = props;

		console.log("🔄 ChatMessages rendered");

		// ✅ Track what causes re-renders
		// useWhyDidYouRender("ChatMessages", props);

		const chatRef = useRef<HTMLDivElement>(null);
		const bottomRef = useRef<HTMLDivElement>(null);
		const topRef = useRef<HTMLDivElement>(null);

		const topMessageIdRef = useRef<string | null>(null); // AnchorId to preserve the current top message Id
		const hasScrolledRef = useRef(false);
		const fetchTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Debounced Intersection Observer

		const queryClient = useQueryClient();
		const [newMessageCount, setNewMessageCount] = useState(0);

		// Use a ref for immediate access inside event listeners
		const isAtBottomRef = useRef(true);
		// const prevScrollHeightRef = useRef(0); // ✅ NEW: Ref to store height before fetching

		// ✅ NEW: Jump mode state
		const [jumpMode, setJumpMode] = useState<{
			active: boolean;
			targetMessageId?: string;
		}>({ active: false });

		const queryProps = useMemo(
			() => ({
				channelId,
				serverId,
				mode: jumpMode.active ? ("around" as const) : ("chronological" as const),
				targetMessageId: jumpMode.targetMessageId,
			}),
			[channelId, serverId, jumpMode.active, jumpMode.targetMessageId],
		);

		const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useChatQuery(queryProps);

		const messages = useMemo(() => {
			return data?.pages.flat().reverse() || [];
		}, [data]);

		const { scrollToBottom } = useChatScroll({
			chatRef,
			bottomRef,
			loadMoreRef: topRef,
			shouldLoadMore: !isFetchingNextPage && !!hasNextPage, // Logic for inverse scroll triggering
			count: messages.length, // Trigger initial scroll when messages load
		});

		const scrollToBottomCallback = useCallback(() => {
			return scrollToBottom();
		}, [scrollToBottom]);

		// Jump to message function
		const jumpToMessage = useCallback((messageId: string) => {
			console.log("🎯 jumpToMessage called:", messageId);

			// Check if message already in DOM
			const el = document.getElementById(`message-${messageId}`);

			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "center" });
				el.classList.add("animate-flash");
				setTimeout(() => el.classList.remove("animate-flash"), 1000);
			} else {
				toast.info("Loading message...");
				setJumpMode({ active: true, targetMessageId: messageId }); // ✅ This triggers re-query
			}
		}, []);

		useImperativeHandle(ref, () => ({
			jumpToMessage,
		}));

		useEffect(() => {
			type EventPayload = {
				messageId: string;
			};

			const handleJump = (e: Event) => {
				const event = e as CustomEvent<EventPayload>;
				const messageId = event.detail.messageId;
				if (messageId) {
					jumpToMessage(messageId);
				}
			};

			window.addEventListener("jump-to-message", handleJump);
			console.log("Jump to message custom event called!");
			return () => window.removeEventListener("jump-to-message", handleJump);
		}, [jumpToMessage]);

		const returnToPresent = useCallback(() => {
			// 1. Switch state back to Chronological
			setJumpMode({ active: false });

			queryClient.cancelQueries({
				queryKey: ["messages", channelId, "jump"],
			});

			queryClient.removeQueries({
				queryKey: ["messages", channelId, "jump"],
			});

			setTimeout(() => {
				if (bottomRef.current) {
					bottomRef.current.scrollIntoView({ behavior: "smooth" });
					setNewMessageCount(0);
				}
			}, 100);

			toast.info("Returned to latest messages");
		}, [channelId, queryClient]);

		// --- EFFECTS: Jump Mode Handling ---
		useEffect(() => {
			if (!jumpMode.active || !jumpMode.targetMessageId || messages.length === 0) return;

			console.log("🔍 Jump mode active, looking for message...");

			const el = document.getElementById(`message-${jumpMode.targetMessageId}`);

			if (el) {
				console.log("✅ Found message after jump fetch!");

				// Disable initial scroll logic temporarily
				hasScrolledRef.current = true;

				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth", block: "center" });
					el.classList.add("animate-flash");
					setTimeout(() => el.classList.remove("animate-flash"), 1000);
					toast.success("Found message!");
				}, 100);
			}
		}, [jumpMode, messages.length]);

		// --- EFFECTS: Scroll Restoration (Anchor ID Method) ---
		// 1. Before Fetching: Save the ID of the top-most message
		useLayoutEffect(() => {
			if (isFetchingNextPage && messages.length > 0 && !jumpMode.active) {
				topMessageIdRef.current = messages[0].id;
			}
		}, [isFetchingNextPage, messages, jumpMode.active]);

		// 2. After Fetching: Find that message and snap to it
		useLayoutEffect(() => {
			if (!isFetchingNextPage && topMessageIdRef.current) {
				const anchorEl = document.getElementById(`message-${topMessageIdRef.current}`);
				if (anchorEl) {
					// 'start' aligns it to top, effectively keeping the view stable
					anchorEl.scrollIntoView({ block: "start", behavior: "auto" });
				}
				topMessageIdRef.current = null;
			}
		}, [isFetchingNextPage, messages]);

		// --- EFFECTS: Initial Scroll (Chronological) ---
		useLayoutEffect(() => {
			if (jumpMode.active || hasScrolledRef.current || !data?.pages?.length || !bottomRef.current) {
				return;
			}
			bottomRef.current.scrollIntoView({ behavior: "auto" });
			hasScrolledRef.current = true;
		}, [data?.pages, jumpMode.active]);

		//  --- EFFECTS: Infinite Scroll Observer ---
		useEffect(() => {
			if (!topRef.current || !hasNextPage || jumpMode.active) return;

			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
						if (fetchTimeoutRef.current) clearTimeout(fetchTimeoutRef.current);
						fetchTimeoutRef.current = setTimeout(() => {
							fetchNextPage();
						}, 100);
					}
				},
				{ root: chatRef.current, threshold: 1.0 },
			);

			observer.observe(topRef.current);

			return () => {
				observer.disconnect();
				if (fetchTimeoutRef.current) clearTimeout(fetchTimeoutRef.current);
			};
		}, [hasNextPage, isFetchingNextPage, fetchNextPage, jumpMode.active]);

		// --- EFFECTS: Scroll Tracking (At Bottom?) ---
		useEffect(() => {
			const chatContainer = chatRef.current;
			if (!chatContainer) return;

			const handleScroll = () => {
				const { scrollTop, scrollHeight, clientHeight } = chatContainer;
				const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
				// Increased buffer to 300px for better UX
				const atBottom = distanceFromBottom < 100;

				isAtBottomRef.current = atBottom;

				if (atBottom) {
					setNewMessageCount(0);

					// ✅ AUTO-EXIT: If user hits bottom in Jump Mode, go back to live
					if (jumpMode.active) {
						returnToPresent();
					}
				}
			};

			chatContainer.addEventListener("scroll", handleScroll, { passive: true });
			return () => chatContainer.removeEventListener("scroll", handleScroll);
		}, [jumpMode.active, returnToPresent]);

		//  --- EFFECTS: Pusher ---
		useEffect(() => {
			if (jumpMode.active) return; // Don't sync live messages while jumping
			console.log("📡 Pusher subscribed");

			// Subscribe to channel
			const channelName = `channel-${channelId}`;
			const channel = pusherClient.subscribe(channelName);

			const handleNewMessage = (newMessage: ChannelMessage & { optimisticClientId?: string }) => {
				// // ✅ 1. If in Jump Mode, just notify and exit
				// if (jumpMode.active) {
				// 	setNewMessageCount((prev) => prev + 1);
				// 	return;
				// }

				// Update query cache with new message
				console.log("🔔 Pusher NEW:", {
					messageId: newMessage.id,
					optimisticId: newMessage.optimisticClientId,
					content: newMessage.content.slice(0, 50),
				});

				queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData: QueryDataShape | undefined) => {
					if (!oldData || !oldData.pages) return oldData;

					let replaced = false;
					let pageIndex = -1;
					let messageIndex = -1;

					// ✅ Step 1: Find the optimistic message
					for (let i = 0; i < oldData.pages.length; i++) {
						const page = oldData.pages[i];

						// Try to find by optimistic ID first
						if (newMessage.optimisticClientId) {
							messageIndex = page.findIndex((m) => m.id === newMessage.optimisticClientId);
							if (messageIndex !== -1) {
								pageIndex = i;
								replaced = true;
								console.log("✅ Found optimistic by ID:", newMessage.optimisticClientId);
								break;
							}
						}

						// Fallback: Find by memberId + timestamp
						if (!replaced) {
							messageIndex = page.findIndex(
								(m) =>
									m.id.startsWith("optimistic-") && m.memberId === newMessage.memberId && Math.abs(new Date(m.createdAt).getTime() - new Date(newMessage.createdAt).getTime()) < 5000,
							);

							if (messageIndex !== -1) {
								pageIndex = i;
								replaced = true;
								console.log("✅ Found optimistic by fallback");
								break;
							}
						}
					}

					// ✅ Step 2: Apply update with structural sharing
					if (replaced && pageIndex !== -1 && messageIndex !== -1) {
						// Only create new reference for the affected page
						const newPages = oldData.pages.map((page, i) => {
							if (i === pageIndex) {
								// Only create new reference for the affected message
								const newPage = [...page];
								newPage[messageIndex] = newMessage;
								return newPage;
							}
							return page; // ✅ Reuse existing page reference
						});

						scrollToBottomCallback();
						return {
							...oldData,
							pages: newPages,
						};
					}

					// ✅ Step 3: Check if message already exists (prevent duplicates)
					const messageExists = oldData.pages.some((page) => page.some((m) => m.id === newMessage.id));

					if (messageExists) {
						console.log("⚠️ Message already exists, skipping");
						return oldData; // ✅ Return same reference = no re-render
					}

					// ✅ Step 4: New message from another user
					console.log("📨 New message from other user");

					const newPages = [...oldData.pages];
					newPages[0] = [newMessage, ...newPages[0]]; // Only first page changes

					// 🟢 SCROLL LOGIC: NEW MESSAGE
					const didScroll = scrollToBottomCallback();

					if (!didScroll) {
						// Only show badge if we didn't scroll!
						setNewMessageCount((prev) => prev + 1);
					}

					return {
						...oldData,
						pages: newPages,
					};
				});
			};
			const handleMessageUpdate = (updatedMessage: ChannelMessage) => {
				queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData: QueryDataShape | undefined) => {
					if (!oldData?.pages) return oldData;

					const newPages = oldData.pages.map((page: ChannelMessage[]) => page.map((msg) => (msg.id === updatedMessage.id ? updatedMessage : msg)));

					return {
						...oldData,
						pages: newPages,
					};
				});
			};

			const handleMessageDelete = (deletedMessage: ChannelMessage) => {
				queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData: QueryDataShape | undefined) => {
					if (!oldData?.pages) return oldData;

					const newPages = oldData.pages.map((page: ChannelMessage[]) => page.map((msg) => (msg.id === deletedMessage.id ? deletedMessage : msg)));

					return {
						...oldData,
						pages: newPages,
					};
				});
			};

			const handleAddReaction = (reaction: MessageReaction) => {
				queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData: QueryDataShape | undefined) => {
					if (!oldData?.pages) return oldData;

					const newPages = oldData.pages.map((page) =>
						page.map((msg) => {
							if (msg.id === reaction.messageId) {
								return {
									...msg,
									reactions: [...(msg.reactions || []), reaction],
								};
							}
							return msg;
						}),
					);

					return { ...oldData, pages: newPages };
				});
			};
			const handleRemoveReaction = (data: { messageId: string; emoji: string; profileId: string }) => {
				queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData: QueryDataShape | undefined) => {
					if (!oldData?.pages) return oldData;

					const newPages = oldData.pages.map((page) =>
						page.map((msg) => {
							if (msg.id === data.messageId) {
								return {
									...msg,
									reactions: (msg.reactions || []).filter((r) => !(r.emoji === data.emoji && r.profileId === data.profileId)),
								};
							}
							return msg;
						}),
					);

					return { ...oldData, pages: newPages };
				});
			};

			channel.bind(MessageEvent.NEW, handleNewMessage);
			channel.bind(MessageEvent.UPDATE, handleMessageUpdate);
			channel.bind(MessageEvent.DELETE, handleMessageDelete);
			channel.bind(MessageEvent.REACTION_ADD, handleAddReaction);
			channel.bind(MessageEvent.REACTION_REMOVE, handleRemoveReaction);

			// Cleanup on unmount or channel change
			return () => {
				console.log("📡 Pusher unsubscribed");
				channel.unbind_all();
				pusherClient.unsubscribe(channelName);
			};
		}, [channelId, queryClient, jumpMode.active, scrollToBottomCallback]);

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

		return (
			<div ref={chatRef} className="flex-1 flex flex-col py-4 overflow-y-auto  no-scrollbar relative">
				{/* ✅ VISUAL INDICATOR: Jump Mode Banner */}
				{jumpMode.active && (
					<div className="fixed top-28 left-1/2 -translate-x-1/2 z-20 bg-[#1e1e22] border border-white/10 px-4 py-2 rounded-full shadow-xl flex items-center gap-3 animate-in slide-in-from-top-2 fade-in">
						<span className="text-xs text-zinc-400">Viewing message history</span>
						<button onClick={returnToPresent} className="text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline">
							Jump to present
						</button>
					</div>
				)}
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
									attachments={message.attachments}
									member={message.member}
									content={message.content}
									fileUrl={message.fileUrl}
									deleted={message.deleted}
									timestamp={format(currentDate, DATE_FORMAT)}
									isUpdated={message.edited}
									channelId={channelId}
									reactions={message.reactions}
									replyTo={message.replyTo}
									pinned={message.pinned}
								/>
							</Fragment>
						);
					})}

					{/* ✅ New Messages Button */}
					{newMessageCount > 0 && !jumpMode.active && (
						<button
							onClick={() => {
								bottomRef.current?.scrollIntoView({ behavior: "smooth" });
								setNewMessageCount(0);
							}}
							className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 flex items-center gap-2 animate-in slide-in-from-bottom-4"
						>
							<ArrowDown className="w-4 h-4" />
							{newMessageCount} new message{newMessageCount > 1 ? "s" : ""}
						</button>
					)}

					{/* Invisible div to scroll to */}
					<div ref={bottomRef} />
				</div>
			</div>
		);
	}),
	(prevProps: ChatMessagesProps, nextProps: ChatMessagesProps) => {
		// ✅ Log memo comparison
		const shouldSkip = prevProps.channelId === nextProps.channelId && prevProps.serverId === nextProps.serverId && prevProps.name === nextProps.name && prevProps.member.id === nextProps.member.id;

		if (!shouldSkip) {
			console.log("❌ React.memo did NOT skip re-render. Changed props:", {
				channelId: prevProps.channelId !== nextProps.channelId,
				serverId: prevProps.serverId !== nextProps.serverId,
				name: prevProps.name !== nextProps.name,
				memberId: prevProps.member.id !== nextProps.member.id,
			});
		} else {
			console.log("✅ React.memo SKIPPED re-render");
		}

		return shouldSkip;
	},
);

ChatMessages.displayName = "ChatMessages";
