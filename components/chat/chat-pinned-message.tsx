"use client";

import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAction } from "next-safe-action/hooks";
import { getPinnedMessageAction } from "@/actions/message";
import { pusherClient } from "@/lib/pusher-client";
import { MessageEvent } from "@/lib/events";
import { ChannelMessage } from "@/schemas/message";
import { Pin, X, FileIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ChatPinnedMessageProps {
	channelId: string;
}

export const ChatPinnedMessage = ({ channelId }: ChatPinnedMessageProps) => {
	const queryClient = useQueryClient();
	const { executeAsync: getPinned } = useAction(getPinnedMessageAction);
	const [isVisible, setIsVisible] = useState(true);

	// 1. Fetch initial pinned message
	const { data: message, isLoading } = useQuery({
		queryKey: ["pinned-message", channelId],
		queryFn: async () => {
			const res = await getPinned({ channelId });
			return res?.data?.message || null;
		},
	});

	// 2. Real-time Updates
	useEffect(() => {
		const channelName = `channel-${channelId}`;
		const channel = pusherClient.subscribe(channelName);

		const handleUpdate = (updatedMessage: ChannelMessage) => {
			// If the updated message is pinned, it becomes the new "Latest Pin"
			if (updatedMessage.pinned) {
				queryClient.setQueryData(["pinned-message", channelId], updatedMessage);
				setIsVisible(true);
			}
			// If the currently shown message was unpinned, remove it
			else {
				queryClient.setQueryData(["pinned-message", channelId], (current: ChannelMessage | null) => {
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
			// Don't unsubscribe here if ChatMessages also uses this channel,
			// but Pusher handles ref-counting so it's usually safe.
		};
	}, [channelId, queryClient]);

	// 3. Navigation Logic
	const onNavigate = () => {
		if (!message) return;
		const el = document.getElementById(`message-${message.id}`);

		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "center" });
			el.classList.add("animate-flash");
			setTimeout(() => el.classList.remove("animate-flash"), 1000);
		} else {
			toast.info("Message is older", {
				description: "Scroll up to load the message context.",
			});
		}
	};

	if (isLoading || !message || !isVisible) return null;

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
						Pinned Message <span className="text-[9px] text-neutral-500/70 ml-1">By {message.member.profile.name}</span>
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

				{/* Close/Hide Button (Client side hide only) */}
				<button
					title="close or hide the pinned message"
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
};
