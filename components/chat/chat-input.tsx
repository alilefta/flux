"use client";

import { sendMessageAction } from "@/actions/message";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Send, Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import TextareaAutosize from "react-textarea-autosize";
import { ChannelMessage } from "@/schemas/message";
import { MemberProfile } from "@/schemas/member";
import { EmojiPopover } from "./emoji-popover";
import { useModal } from "@/hooks/use-modal-store";

interface ChatInputProps {
	placeholder?: string;
	channelId: string;
	name: string;
	member: MemberProfile;
}

type QueryDataShape = InfiniteData<ChannelMessage[], (Date | undefined)[]>;

export const ChatInput = ({ placeholder, channelId, name, member }: ChatInputProps) => {
	const { onOpen } = useModal();
	const [message, setMessage] = useState("");
	const [fileURL, setFileURL] = useState<string | null>(null);
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
		mutationFn: async (content: string) => {
			const result = await sendMessage({
				content,
				channelId,
				fileUrl: fileURL || undefined,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		// optimistic UI update
		onMutate: async (newMessage) => {
			// Cancel outgoing queries
			await queryClient.cancelQueries({ queryKey: ["messages", channelId] });

			// Snapshot previous state
			const previousMessages = queryClient.getQueryData<QueryDataShape>(["messages", channelId]);

			const optimisticId = `optimistic-${crypto.randomUUID()}`;
			const optimisticMessage: ChannelMessage = {
				channelId,
				content: newMessage,
				createdAt: new Date(),
				updatedAt: new Date(),
				deleted: false,
				edited: false,
				fileUrl: fileURL,
				id: optimisticId,
				member: member,
				memberId: member.id,
			};

			// Add optimistic message
			queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData) => {
				if (!oldData?.pages) return oldData;

				const newPages = [...oldData.pages];
				newPages[0] = [optimisticMessage, ...newPages[0]];

				return { ...oldData, pages: newPages };
			});

			return { previousMessages, optimisticId };
		},
		onSuccess: () => {
			// Clear input
			setMessage("");
			setFileURL(null);

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
		mutation.mutate(message);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
		if (openEmojiPicker) {
			setOpenEmojiPicker(false);
		}
	};

	return (
		<div className="px-4 pb-4">
			<div className=" rounded-xl p-1 flex items-end gap-2 border border-white/10 bg-black/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
				<button
					disabled={mutation.isPending}
					onClick={() =>
						onOpen("messageFile", {
							query: { channelId }, // Pass context
						})
					}
					title="Attach File"
					className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
				>
					<Plus className="w-5 h-5" />
				</button>

				<TextareaAutosize
					value={message}
					onChange={(e) => setMessage(e.currentTarget.value)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder || `Message #${name}`}
					disabled={mutation.isPending}
					className="w-full bg-transparent text-sm text-white placeholder-zinc-500 resize-none max-h-32 min-h-10 py-2.5 focus:outline-none font-sans disabled:opacity-50"
					minRows={1}
					maxRows={4}
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
