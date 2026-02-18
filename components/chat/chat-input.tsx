"use client";

import { sendMessageAction } from "@/actions/message";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Send, Loader2, X } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import TextareaAutosize from "react-textarea-autosize";
import { ChannelMessage } from "@/schemas/message";
import { MemberProfile } from "@/schemas/member";
import { EmojiPopover } from "./emoji-popover";
import { useModal } from "@/hooks/use-modal-store";
import { useChatStore } from "@/hooks/use-chat-store";
import { cn } from "@/lib/utils";

interface ChatInputProps {
	placeholder?: string;
	channelId: string;
	name: string;
	member: MemberProfile;
}

type QueryDataShape = InfiniteData<ChannelMessage[], (Date | undefined)[]>;

export const ChatInput = ({ placeholder, channelId, name, member }: ChatInputProps) => {
	const onOpen = useModal((state) => state.onOpen);
	const replyingTo = useChatStore((state) => state.replyingTo);
	const setReplyingTo = useChatStore((state) => state.setReplyingTo);

	const [message, setMessage] = useState("");
	const queryClient = useQueryClient();

	const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

	const { executeAsync: sendMessage } = useAction(sendMessageAction, {
		onError: ({ error }) => {
			if (error.validationErrors) {
				toast.error("Please check your message and try again");
				console.error(error.validationErrors);
			}
			if (error.serverError) {
				toast.error(error.serverError || "Failed to send message");
			}
		},
	});

	const mutation = useMutation({
		mutationFn: async ({ content, optimisticId }: { content: string; optimisticId: string }) => {
			const result = await sendMessage({
				content,
				channelId,
				replyToId: replyingTo?.id,
				optimisticClientId: optimisticId,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		// optimistic UI update
		onMutate: async ({ content, optimisticId }, context) => {
			// Cancel outgoing queries
			await context.client.cancelQueries({ queryKey: ["messages", channelId] });

			// Snapshot previous state
			const previousMessages = queryClient.getQueryData<QueryDataShape>(["messages", channelId]);

			// const optimisticId = `optimistic-${crypto.randomUUID()}`;
			const optimisticMessage: ChannelMessage = {
				id: optimisticId,
				channelId,
				content: content,
				createdAt: new Date(),
				updatedAt: new Date(),
				deleted: false,
				edited: false,
				pinned: false,
				replyToId: replyingTo?.id ?? null,
				fileUrl: null,
				attachments: [],
				reactions: [],
				member,
				memberId: member.id,
				replyTo: replyingTo ?? null,
			};

			// Add optimistic message
			queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData) => {
				if (!oldData?.pages) return oldData;

				// const firstPage = oldData.pages[0];

				// const wholePage = firstPage.slice(1);

				// const newPage = [optimisticMessage, ...wholePage];

				// const updatedData = {
				// 	...oldData,
				// 	pages: [...[optimisticMessage, ...oldData.pages[0].slice(1)], ...oldData.pages.slice(1)],
				// };

				const newPages = [...oldData.pages];
				newPages[0] = [optimisticMessage, ...newPages[0]];

				return { ...oldData, pages: newPages };
			});

			console.log("✨ Optimistic message added:", optimisticId);

			return { previousMessages, optimisticId };
		},
		onSuccess: () => {
			// Clear input
			setMessage("");
			setReplyingTo(null);
			// ✅ That's it! Pusher will handle replacing optimistic message
		},
		onError: (error, variables, context) => {
			toast.error(error.message || "Failed to send message");

			// Rollback
			if (context?.previousMessages) {
				queryClient.setQueryData(["messages", channelId], context.previousMessages);
			}
		},
	});

	const handleSend = () => {
		if (!message.trim()) return;

		const optimisticId = `optimistic-${crypto.randomUUID()}`;
		mutation.mutate({ content: message, optimisticId });
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}

		if (e.key === "Escape" && replyingTo) {
			setReplyingTo(null);
			return;
		}

		if (openEmojiPicker) {
			setOpenEmojiPicker(false);
		}
	};

	// Auto-focus input when reply mode is activated
	useEffect(() => {
		if (replyingTo) {
			// Simple way to focus the textarea if using react-textarea-autosize
			const textarea = document.querySelector("textarea");
			textarea?.focus();
		}
	}, [replyingTo]);

	return (
		<div className="px-4 pb-4">
			{/* ✅ REPLY BANNER (Discord Style) */}
			{replyingTo && (
				<div className="flex items-center justify-between bg-[#1e1e22] px-4 py-2 rounded-t-xl border-x border-t border-white/10 -mb-px z-0 animate-in slide-in-from-bottom-2 fade-in">
					<div className="flex items-center gap-2 text-sm text-zinc-400 overflow-hidden">
						<span className="font-semibold text-zinc-300 whitespace-nowrap">Replying to @{replyingTo.member.profile.name}</span>
						{/* Truncated preview of what we are replying to */}
						<span className="truncate opacity-60 italic max-w-50 md:max-w-md">&quot;{replyingTo.content.length > 0 ? replyingTo.content : "attachements"}&quot;</span>
					</div>

					<button title="Discard replay" onClick={() => setReplyingTo(null)} className="text-zinc-500 hover:text-zinc-300 transition-colors">
						<X className="w-4 h-4" />
					</button>
				</div>
			)}
			<div
				className={cn(
					"rounded-xl p-1 flex items-end gap-2 border border-white/10 bg-black/40 transition-all relative z-10",
					// If replying, remove top rounding to merge with banner
					replyingTo ? "rounded-t-none border-t-white/10 bg-[#1e1e22]" : "focus-within:border-primary/50",
				)}
			>
				<button
					disabled={mutation.isPending}
					onClick={() =>
						onOpen("messageFile", {
							query: { channelId, member }, // Pass context
						})
					}
					title="Attach File"
					className="p-2 rounded-lg  text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
				>
					<Plus className="w-5 h-5" />
				</button>

				<TextareaAutosize
					value={message}
					onChange={(e) => setMessage(e.currentTarget.value)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder || `Message #${name}`}
					disabled={mutation.isPending}
					className="w-full pb-1  bg-transparent text-sm text-white placeholder-zinc-500 resize-none max-h-32 min-h-10 py-2.5 focus:outline-none font-sans disabled:opacity-50"
					minRows={1}
					maxRows={4}
					name="chat-input"
					onFocus={() => {
						if (openEmojiPicker) {
							setOpenEmojiPicker(false);
						}
					}}
				/>

				<div className="flex items-center gap-1 pb-1 shrink-0 relative">
					<EmojiPopover updateMessage={(value) => setMessage((p) => p + value)} />

					<button
						title="Send"
						onClick={handleSend}
						disabled={mutation.isPending || !message.trim()}
						className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-primary hover:bg-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
					</button>
				</div>
			</div>

			{/* Character Count (optional) */}
			{message.length > 1800 && <p className="text-xs text-zinc-500 mt-1 text-right">{message.length}/2000 characters</p>}
		</div>
	);
};
