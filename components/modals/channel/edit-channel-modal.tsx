"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { updateChannelAction } from "@/actions/channel";
import { UpdateChannelInput } from "@/schemas/channel";
import { toast } from "sonner";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FluxInput } from "@/components/custom-ui/inputs/flux-input";

export const EditChannelModal = () => {
	const { isOpen, onClose, type, data } = useModal();
	const router = useRouter();

	const isModalOpen = isOpen && type === "editChannel";
	const { channel, server } = data;

	const { control, handleSubmit, reset, setValue } = useForm<UpdateChannelInput>({
		resolver: zodResolver(UpdateChannelInput),
		defaultValues: {
			name: "",
			channelId: "",
			serverId: "",
		},
	});

	// Pre-fill form
	useEffect(() => {
		if (channel && server) {
			setValue("name", channel.name);
			setValue("channelId", channel.id);
			setValue("serverId", server.id);
		}
	}, [channel, server, isModalOpen, setValue]);

	const { execute, status } = useAction(updateChannelAction, {
		onSuccess: ({ data }) => {
			if (data?.success) {
				onClose();
				router.refresh();
				toast.success("Channel Updated");
			}
		},
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to update channel");
		},
	});

	const isLoading = status === "executing";

	const onSubmit = (values: UpdateChannelInput) => {
		execute(values);
	};

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md">
				<DialogHeader className="pt-8 px-6 bg-zinc-900/50 pb-6 border-b border-white/5">
					<DialogTitle className="text-2xl text-center font-bold">Edit Channel</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div className="p-6 space-y-6">
						{/* NAME INPUT */}
						<Controller
							control={control}
							name="name"
							render={({ field, fieldState }) => <FluxInput field={field} fieldState={fieldState} nameInSchema="name" fieldTitle="Channel Name" placeholder="e.g. daily-standup" />}
						/>
					</div>

					<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5">
						<Button type="button" disabled={isLoading} variant="ghost" onClick={handleClose} className="text-zinc-400 hover:text-white">
							Cancel
						</Button>
						<Button disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-25">
							{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Save"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
