"use client";

import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { deleteServerAction } from "@/actions/server";
import { toast } from "sonner";
import { Loader2, AlertTriangle } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const DeleteServerModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);
	const router = useRouter();

	const isModalOpen = isOpen && type === "deleteServer";
	const { server } = data;

	const { execute, status } = useAction(deleteServerAction, {
		onSuccess: ({ data }) => {
			if (data?.success) {
				onClose();
				router.refresh();
				router.push("/setup");
				toast.success("Server Deleted");
			}
		},
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to delete server");
		},
	});

	const isLoading = status === "executing";

	const onConfirm = () => {
		if (!server) return;
		execute({ serverId: server.id });
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md">
				<DialogHeader className="pt-8 px-6 pb-2">
					<DialogTitle className="text-2xl text-center font-bold flex flex-col items-center gap-4">
						<div className="h-12 w-12 rounded-full bg-rose-500/10 flex items-center justify-center">
							<AlertTriangle className="h-6 w-6 text-rose-500" />
						</div>
						Delete Server
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-400 mt-2">
						Are you sure you want to do this? <br />
						<span className="font-bold text-white">{server?.name}</span> will be permanently deleted along with all channels and messages. <br />
						<span className="text-rose-500 font-bold mt-2 block">This action cannot be undone.</span>
					</DialogDescription>
				</DialogHeader>

				<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5 mt-6">
					<div className="flex items-center justify-between w-full">
						<Button disabled={isLoading} variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white">
							Cancel
						</Button>
						<Button disabled={isLoading} onClick={onConfirm} className="bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/20">
							{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Confirm Delete"}
						</Button>
					</div>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
