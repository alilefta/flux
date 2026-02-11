"use client";

import { sendMessageAction } from "@/actions/message";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Smile, Send, Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import TextareaAutosize from "react-textarea-autosize";
import { Channel } from "pusher-js";
import { ChannelMessage } from "@/schemas/message";
import EmojiPicker, { Theme } from "emoji-picker-react";
import { MemberProfile } from "@/schemas/member";
import { EmojiPopover } from "./emoji-popover";

interface ChatInputProps {
	placeholder?: string;
	channelId: string;
	name: string;
	serverId: string;
	member: MemberProfile;
}

type QueryDataShape = InfiniteData<ChannelMessage[], (Date | undefined)[]>;

export const ChatInput = ({ placeholder, channelId, name, serverId, member }: ChatInputProps) => {
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
				fileUrl: undefined,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		// optimistic UI update
		onMutate: async (newMessage, context) => {
			await context.client.cancelQueries({
				queryKey: ["messages", channelId],
			});
			const previousMessages = context.client.getQueryData<QueryDataShape>(["messages", channelId]);

			queryClient.setQueryData(["messages", channelId], (oldData: QueryDataShape): QueryDataShape => {
				if (!oldData.pages) return oldData;

				const timestamp = Date.now();

				const optimisticMessage: ChannelMessage = {
					channelId,
					content: message,
					createdAt: new Date(),
					updatedAt: new Date(),
					deleted: false,
					edited: false,
					fileUrl: fileURL,
					id: `optimistic-${new Date().toDateString()}`,
					member: member,
					memberId: member.id,
				};

				const newPages = [...oldData.pages];
				newPages[0] = [optimisticMessage, ...newPages[0]];

				// Add new message to the end
				return { ...oldData, pages: newPages };
			});

			console.log("============== optimistic update =============");
			console.log("New Update: ", newMessage);
			console.log("Previous Messages: ", previousMessages);

			return {
				previousMessages,
				optimisticMessageContent: message,
			};
		},
		onSettled: (_data, error, _variables, context) => {
			console.info("On Settle: Syncing with server state");
			queryClient.invalidateQueries({ queryKey: ["messages", channelId] });

			if (error) {
				console.info("Settled after error", error);
			} else {
				console.info("Settled after success - server data will be replaced optimistically", _data);
			}
		},
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
		onError: (error, variables, context) => {
			toast.error(error.message || "Failed to send message");

			console.error("Mutation failed for:", context?.optimisticMessageContent);
			// rollback
			if (!context?.previousMessages) {
				queryClient.setQueryData(["messages", channelId], context?.previousMessages);
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
