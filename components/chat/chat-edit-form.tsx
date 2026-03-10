"use client";

import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { editMessageAction } from "@/actions/message";
import { toast } from "sonner";
import TextareaAutoSize from "react-textarea-autosize";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { editDirectMessageAction } from "@/actions/direct-message";
import { ChatType } from "@/schemas/composed/shared.base";

interface ChatEditFormProps {
	messageId: string;
	initialContent: string;
	onCancel: () => void;
	onSuccess: () => void;
	chatType: ChatType;
}

export const ChatEditForm = ({ messageId, initialContent, onCancel, onSuccess, chatType }: ChatEditFormProps) => {
	const [content, setContent] = useState(initialContent);

	const editMutation = useMutation({
		mutationFn: async () => {
			// ✅ Dynamic Routing
			const action = chatType === "channel" ? editMessageAction : editDirectMessageAction;
			const result = await action({ messageId, content });

			if (result?.serverError) throw new Error(result.serverError);
			return result?.data;
		},
		onSuccess: () => onSuccess(),
		onError: (error) => toast.error(error.message),
	});

	const handleSave = () => {
		if (!content.trim() || content === initialContent) {
			onCancel();
			return;
		}
		editMutation.mutate();
	};

	// Handle Keys (Esc / Enter)
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				onCancel();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onCancel]);

	return (
		<div className="w-full mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
			<div
				className={cn(
					"relative w-full rounded-xl bg-[#09090b] border ring-1 overflow-hidden shadow-sm transition-all",
					editMutation.isPending ? "border-white/10 ring-transparent opacity-50 cursor-not-allowed" : "border-indigo-500/30 ring-indigo-500/20",
				)}
			>
				<TextareaAutoSize
					minRows={1}
					maxRows={10}
					value={content}
					onChange={(e) => setContent(e.target.value)}
					disabled={editMutation.isPending}
					className="p-3 bg-transparent text-zinc-200 w-full text-[15px] focus:outline-none resize-none font-sans leading-relaxed"
					onKeyDown={(e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							handleSave();
						}
					}}
					autoFocus
				/>
			</div>

			<div className="flex items-center gap-x-2 mt-2">
				<span className="text-[10px] text-zinc-500 font-medium">
					escape to{" "}
					<span className="hover:text-white cursor-pointer transition-colors" onClick={onCancel}>
						cancel
					</span>{" "}
					• enter to{" "}
					<span className="text-indigo-400 cursor-pointer hover:underline transition-colors" onClick={handleSave}>
						save
					</span>
				</span>

				<Button
					size="sm"
					variant="default"
					disabled={editMutation.isPending || !content.trim()}
					onClick={handleSave}
					className="ml-auto h-6 text-[10px] bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-0"
				>
					{editMutation.isPending ? "Saving..." : "Save"}
				</Button>
			</div>
		</div>
	);
};
