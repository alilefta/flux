"use client";

import { sendMessageAction } from "@/actions/message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Smile, Send, Activity, Terminal, Loader2 } from "lucide-react";
import { InferSafeActionFnResult } from "next-safe-action";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import TextareaAutosize from "react-textarea-autosize";

interface ChatInputProps {
	placeholder?: string;
	channelId: string;
	name: string;
	serverId: string; // ✅ Add this
}

type SendMessageActionResults = InferSafeActionFnResult<typeof sendMessageAction>;

export const ChatInput = ({ placeholder, channelId, name, serverId }: ChatInputProps) => {
	const [message, setMessage] = useState("");
	const queryClient = useQueryClient();

	const { executeAsync: sendMessage, isExecuting } = useAction(sendMessageAction, {
		onSuccess: ({ data }) => {
			toast.success("message sent successfully");
		},
		onError: ({ error }) => {
			handleActionError(error);
		},
	});

	const handleActionError = (error: { serverError?: SendMessageActionResults["serverError"]; validationErrors?: SendMessageActionResults["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("PROTOCOL_REJECTED", {
				description: "INPUT_INTEGRITY_FAILURE // CHECK_REQUIRED_FIELDS",
				icon: <Activity className="text-red-500" size={16} />,
			});

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error("SYSTEM_HALT", {
				description: error.serverError.toUpperCase(),
				icon: <Terminal className="text-red-500" size={16} />,
			});
		}
	};

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
		onSuccess: () => {
			// ✅ Clear input
			setMessage("");

			// ✅ Invalidate messages query to refetch
			queryClient.invalidateQueries({
				queryKey: ["messages", channelId],
			});

			toast.success("Message sent!");
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
	};

	const showEmojiSelector = () => {};
	return (
		<div className="px-4 pb-4">
			<div className="relative rounded-xl p-1 flex items-end gap-2 border border-white/10 bg-black/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
				<button title="Attach" className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
					<Plus className="w-5 h-5" />
				</button>

				<TextareaAutosize
					value={message}
					onChange={(e) => setMessage(e.currentTarget.value)}
					onKeyDown={handleKeyDown}
					placeholder={placeholder || "Message..."}
					disabled={mutation.isPending}
					className="w-full bg-transparent text-sm text-white placeholder-zinc-500 resize-none max-h-32 min-h-[40px] py-2.5 focus:outline-none font-sans disabled:opacity-50"
					rows={1}
				/>
				<div className="flex items-center gap-1 pb-1 shrink-0">
					<button onClick={showEmojiSelector} title="Emoji Selector" className="p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-white/10 transition-colors">
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

			{/* Optional: Typing Indicator Slot */}
		</div>
	);
};
