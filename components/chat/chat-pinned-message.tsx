"use client";

import { memo, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPinnedMessageAction } from "@/actions/message";
import { getPinnedDirectMessageAction } from "@/actions/direct-message"; // ✅ Import DM action
import { pusherClient } from "@/lib/pusher-client";
import { MessageEvent } from "@/lib/events";
import { Pin, X, FileIcon } from "lucide-react";
import { QUERY_KEYS } from "@/lib/query-keys"; // ✅ Import Keys
import { ChatType } from "@/schemas/composed/shared.base";
import { ChannelMessage } from "@/schemas/message";
import { DirectChatMessage } from "@/schemas/composed/direct-message.details";
import { handleSafeActionError } from "@/lib/safe-action-helpers";

interface ChatPinnedMessageProps {
	contextId: string;
	type: ChatType; // ✅ "channel" | "conversation"
	onJumpToMessage: (messageId: string) => void;
}

export const ChatPinnedMessage = memo(
	({ contextId, type, onJumpToMessage }: ChatPinnedMessageProps) => {
		const queryClient = useQueryClient();
		const [isVisible, setIsVisible] = useState(true);

		// 1. Determine Dynamic Keys & Actions
		const queryKey = type === "channel" ? QUERY_KEYS.channel.pinned(contextId) : QUERY_KEYS.dm.pinned(contextId);

		// 2. Fetch Logic
		const { data: message, isLoading } = useQuery({
			queryKey: queryKey,
			queryFn: async () => {
				if (type === "channel") {
					const result = await getPinnedMessageAction({ channelId: contextId });

					if (!result?.data?.success) {
						handleSafeActionError<typeof getPinnedMessageAction>({
							serverError: result.serverError,
							validationErrors: result.validationErrors,
						});
						throw new Error(result?.serverError || "Failed to fetch pinned message");
					}

					return result.data.message as ChannelMessage;
				} else {
					const result = await getPinnedDirectMessageAction({ conversationId: contextId });
					if (!result?.data?.success) {
						handleSafeActionError<typeof getPinnedDirectMessageAction>({
							serverError: result.serverError,
							validationErrors: result.validationErrors,
						});
						throw new Error(result?.serverError || "Failed to fetch pinned message");
					}

					return result.data.message as DirectChatMessage;
				}
			},
			staleTime: Infinity, // Rely on Pusher for updates
		});

		// 3. Real-time Updates
		useEffect(() => {
			// Logic for Pusher Channel Name
			const pusherChannelName = type === "channel" ? `channel-${contextId}` : `conversation-${contextId}`;

			const channel = pusherClient.subscribe(pusherChannelName);

			const handleUpdate = (updatedMessage: ChannelMessage | DirectChatMessage) => {
				// If the updated message is pinned, it becomes the new "Latest Pin"
				if (updatedMessage.pinned) {
					queryClient.setQueryData(queryKey, updatedMessage);
					setIsVisible(true);
				}
				// If the currently shown message was unpinned, remove it
				else {
					queryClient.setQueryData(queryKey, (current: ChannelMessage | DirectChatMessage) => {
						if (current?.id === updatedMessage.id) {
							return null; // Remove from view
						}
						return current;
					});
				}
			};

			channel.bind(MessageEvent.UPDATE, handleUpdate);

			return () => {
				channel.unbind(MessageEvent.UPDATE, handleUpdate);
				pusherClient.unsubscribe(pusherChannelName);
			};
		}, [contextId, type, queryClient, queryKey]);

		// 4. Navigation Logic
		const onNavigate = () => {
			if (!message) return;
			onJumpToMessage(message.id);
		};

		if (isLoading) return null; // Or a mini skeleton
		if (!message || !isVisible) return null;

		// 5. Data Normalization for Display
		// Channel messages have `member.profile.name`
		// Direct messages have `member.name` (because member IS the profile)
		const authorName = "profile" in message.member ? message.member.profile.name : message.member.name;

		return (
			<div className="relative w-full bg-[#141417] border-b border-white/5 z-10 animate-in slide-in-from-top-2 fade-in duration-300">
				<div onClick={onNavigate} className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-white/2 transition-colors group">
					{/* Icon Column */}
					<div className="h-8 w-1 flex items-center justify-center border-l-2 border-indigo-500 pl-2">
						<Pin className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
					</div>

					{/* Content Column */}
					<div className="flex-1 min-w-0 flex flex-col justify-center">
						<span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-0.5">
							Pinned Message <span className="text-[9px] text-zinc-500/70 ml-1">By {authorName}</span>
						</span>

						<div className="text-xs text-zinc-300 truncate font-medium flex items-center gap-1">
							{message.deleted ? (
								<span className="italic text-zinc-500">Message deleted</span>
							) : (
								<>
									{/* Show file icon if file-only */}
									{!message.content && message.attachments?.length > 0 && <FileIcon className="w-3 h-3 text-zinc-500 mr-1" />}
									{/* Show content or fallback */}
									{message.content || "Attachment"}
								</>
							)}
						</div>
					</div>

					{/* Close/Hide Button */}
					<button
						title="Dismiss pinned message"
						onClick={(e) => {
							e.stopPropagation();
							setIsVisible(false);
						}}
						className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition opacity-0 group-hover:opacity-100"
					>
						<X className="w-4 h-4" />
					</button>
				</div>
			</div>
		);
	},
	(prev, next) => prev.contextId === next.contextId,
);

ChatPinnedMessage.displayName = "ChatPinnedMessage";
