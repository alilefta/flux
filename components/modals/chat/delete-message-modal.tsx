"use client";

import { useModal } from "@/hooks/use-modal-store";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2, AlertTriangle } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import both actions
import { markMessageAsDeletedAction } from "@/actions/message";
import { deleteDirectMessageAction } from "@/actions/direct-message";

export const DeleteMessageModal = () => {
	const { isOpen, onClose, type, data } = useModal();

	const isModalOpen = isOpen && type === "deleteMessage";
	const { query } = data;

	const messageId = query?.messageId as string;
	const chatType = query?.chatType as "channel" | "conversation";

	const deleteMutation = useMutation({
		mutationFn: async () => {
			if (!messageId || !chatType) throw new Error("Missing message data");

			// ✅ Action Router based on chat type
			const action = chatType === "channel" ? markMessageAsDeletedAction : deleteDirectMessageAction;
			const result = await action({ messageId });

			if (result?.serverError) throw new Error(result.serverError);
			return result?.data;
		},
		onSuccess: () => {
			onClose();
			// Pusher handles the UI update automatically
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete message");
		},
	});

	const onConfirm = () => {
		deleteMutation.mutate();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={deleteMutation.isPending ? undefined : onClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md">
				<DialogHeader className="pt-8 px-6 pb-2">
					<DialogTitle className="text-2xl text-center font-bold flex flex-col items-center gap-4">
						<div className="h-12 w-12 rounded-full bg-rose-500/10 flex items-center justify-center">
							<AlertTriangle className="h-6 w-6 text-rose-500" />
						</div>
						Delete Message
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-400 mt-2">
						Are you sure you want to do this? <br />
						The message will be permanently deleted.
					</DialogDescription>
				</DialogHeader>

				<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5 mt-6">
					<div className="flex items-center justify-between w-full">
						<Button disabled={deleteMutation.isPending} variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white">
							Cancel
						</Button>
						<Button disabled={deleteMutation.isPending} onClick={onConfirm} className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/20 min-w-30">
							{deleteMutation.isPending ? <Loader2 className="animate-spin w-4 h-4" /> : "Delete Message"}
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
