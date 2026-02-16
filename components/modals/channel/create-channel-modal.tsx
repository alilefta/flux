"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { createChannelAction } from "@/actions/channel";
import { ChannelType } from "@/generated/prisma/enums";
import { toast } from "sonner";
import { useEffect } from "react";
import { Loader2, Hash, Mic, Video } from "lucide-react";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FluxInput } from "../../custom-ui/inputs/flux-input";
import { FluxFormSelect } from "../../custom-ui/inputs/flux-form-select";
import { CreateChannelInput } from "@/schemas/composed/channel.details";

export const CreateChannelModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);
	const router = useRouter();
	const params = useParams();

	const isModalOpen = isOpen && type === "createChannel";
	const { channelType } = data; // Pre-fill type if clicked from specific section

	const { control, handleSubmit, reset, setValue } = useForm<CreateChannelInput>({
		resolver: zodResolver(CreateChannelInput),
		defaultValues: {
			name: "",
			type: channelType || ChannelType.TEXT,
			serverId: params?.serverId as string, // Will be overwritten by useEffect
		},
	});

	// Update serverId when modal opens or params change
	useEffect(() => {
		if (params?.serverId) {
			setValue("serverId", params.serverId as string);
		}
		if (channelType) {
			setValue("type", channelType);
		}
	}, [params?.serverId, channelType, setValue]);

	const { execute, status } = useAction(createChannelAction, {
		onSuccess: () => {
			reset();
			onClose();
			router.refresh();
			toast.success("Channel Created");
		},
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to create channel");
		},
	});

	const isLoading = status === "executing";

	const onSubmit = (values: CreateChannelInput) => {
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
					<DialogTitle className="text-2xl text-center font-bold">Create Channel</DialogTitle>
				</DialogHeader>

				<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
					<div className="p-6 space-y-6">
						{/* NAME INPUT */}
						<Controller
							control={control}
							name="name"
							render={({ field, fieldState }) => <FluxInput field={field} fieldState={fieldState} nameInSchema="name" fieldTitle="Channel Name" placeholder="e.g. daily-standup" />}
						/>

						{/* TYPE SELECTOR */}
						<FluxFormSelect<CreateChannelInput>
							control={control}
							fieldTitle="Channel Type"
							nameInSchema="type"
							placeholder="Select a channel type"
							options={[
								{
									label: "Text",
									value: ChannelType.TEXT,
									icon: Hash,
								},
								{
									label: "Audio",
									value: ChannelType.AUDIO,
									icon: Mic,
								},
								{
									label: "Video",
									value: ChannelType.VIDEO,
									icon: Video,
								},
							]}
						/>
					</div>

					<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5">
						<Button disabled={isLoading} variant="ghost" onClick={handleClose} className="text-zinc-400 hover:text-white">
							Cancel
						</Button>
						<Button disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white">
							{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Create"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};
