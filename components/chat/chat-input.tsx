"use client";

import { sendMessageAction } from "@/actions/message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Smile, Send, Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import TextareaAutosize from "react-textarea-autosize";
import { Channel } from "pusher-js";
import { ChannelMessage } from "@/schemas/message";
import EmojiPicker, { Theme } from "emoji-picker-react";

interface ChatInputProps {
	placeholder?: string;
	channelId: string;
	name: string;
	serverId: string;
	memberId: string;
	// handleOptimisticMessageCreation: (
	// 	data: Partial<ChannelMessage> & {
	// 		_optimistic: boolean;
	// 	},
	// ) => void;
}

export const ChatInput = ({ placeholder, channelId, name, serverId, memberId }: ChatInputProps) => {
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
		mutationFn: async (content: string) => {
			const result = await sendMessage({
				content,
				channelId,
				fileUrl: undefined,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		// // optimistic UI update
		// onMutate: async (newMessage, context) => {
		// 	// await context.client.cancelQueries({
		// 	// 	queryKey: ["messages", channelId],
		// 	// });
		// 	// const previousMessages: ChannelMessage[] = context.client.getQueryData(["messages", channelId]);
		// 	// context.client.setQueryData(["messages", channelId], (old: ChannelMessage[]) => [...old, newMessage]);
		// 	// handleOptimisticMessageCreation({
		// 	// 	_optimistic: true,
		// 	// 	channelId: channelId,
		// 	// 	content: message,
		// 	// 	createdAt: new Date(),
		// 	// 	deleted: false,
		// 	// 	edited: false,
		// 	// 	id: `temp_${new Date().toISOString()}`,
		// 	// 	fileUrl: null,
		// 	// 	memberId: memberId,
		// 	// 	updatedAt: new Date(),
		// 	// });
		// },
		onSuccess: () => {
			// ✅ Clear input
			setMessage("");

			// ❌ REMOVE THIS - Pusher handles updates now!
			// queryClient.invalidateQueries({
			//   queryKey: ["messages", channelId],
			// });

			// ❌ REMOVE THIS - Too noisy, only show on error
			// toast.success("Message sent!");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to send message");
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
					title="Attach"
					disabled={mutation.isPending}
					className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<Plus className="w-5 h-5" />
				</button>

				<TextareaAutosize
					value={message}
					onChange={(e) => setMessage(e.currentTarget.value)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder || `Message #${name}`}
					disabled={mutation.isPending}
					className="w-full bg-transparent text-sm text-white placeholder-zinc-500 resize-none max-h-32 min-h-[40px] py-2.5 focus:outline-none font-sans disabled:opacity-50"
					minRows={1}
					maxRows={4}
					onFocus={() => {
						if (openEmojiPicker) {
							setOpenEmojiPicker(false);
						}
					}}
				/>

				<div className="flex items-center gap-1 pb-1 shrink-0 relative">
					<button
						onClick={() => setOpenEmojiPicker((p) => !p)}
						title="Emoji"
						className="  top-0 bottom-0 p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-white/10 transition-colors disabled:opacity-50"
					>
						<Smile className="w-5 h-5" />
					</button>

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

			<EmojiPicker
				theme={Theme.DARK}
				onEmojiClick={(emoji) => {
					setMessage((p) => p + emoji.emoji);
				}}
				open={openEmojiPicker}
				style={{
					position: "absolute",
					zIndex: 40,
					right: 0,
					bottom: "68px",
				}}
			/>

			{/* Character Count (optional) */}
			{message.length > 1800 && <p className="text-xs text-zinc-500 mt-1 text-right">{message.length}/2000 characters</p>}
		</div>
	);
};
