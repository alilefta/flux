"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { createServerAction } from "@/actions/server";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FluxInput } from "@/components/custom-ui/inputs/flux-input";
import { ServerImageUpload } from "./inputs/server-image-upload";
import { CreateServerInput, CreateServerSchema } from "@/schemas/composed/server.details";
import { handleSafeActionError } from "@/lib/safe-action-helpers";

export const CreateServerModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const router = useRouter();

	const isModalOpen = isOpen && type === "createServer";

	const methods = useForm<CreateServerInput>({
		resolver: zodResolver(CreateServerSchema),
		defaultValues: {
			name: "",
			imageUrl: "",
		},
	});

	const {
		handleSubmit,
		control,
		reset,
		formState: { isValid }, // RHF submitting state
	} = methods;

	// Next-Safe-Action Hook
	const { executeAsync: executeCreateServer, isExecuting: isCreatingServer } = useAction(createServerAction, {
		onSuccess: ({ data }) => {
			if (data?.success && data.server) {
				toast.success("DEPLOYMENT_SUCCESSFUL", {
					description: `SERVER_ID: ${data.server.id} // READY`,
					icon: <ShieldCheck className="text-emerald-500" size={16} />,
				});

				handleClose();
				router.push(`/servers/${data.server.id}`);
			}
		},
		onError({ error }) {
			handleSafeActionError<typeof createServerAction>(error);
		},
	});

	const onSubmit = (values: CreateServerInput) => {
		executeCreateServer(values);
	};

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-[#09090b] border border-white/10 text-white p-0 overflow-hidden shadow-2xl sm:max-w-110 gap-0 rounded-2xl">
				{/* HEADER */}
				<DialogHeader className="pt-8 px-6 bg-zinc-900/50 pb-6 border-b border-white/5">
					<DialogTitle className="text-2xl text-center font-bold">Customize your server</DialogTitle>
					<DialogDescription className="text-center text-zinc-400">Give your new workspace a personality with a name and an icon.</DialogDescription>
				</DialogHeader>

				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="p-6 space-y-6">
							{/* 1. IMAGE UPLOAD (Centered) */}
							<div className="flex justify-center">
								<ServerImageUpload />
							</div>

							{/* 2. NAME INPUT */}
							<Controller
								control={control}
								name="name"
								render={({ field, fieldState }) => (
									<FluxInput fieldTitle="SERVER NAME" nameInSchema="name" field={field} fieldState={fieldState} placeholder="e.g. Acme Corp Engineering" className="bg-zinc-900/50" />
								)}
							/>
						</div>

						{/* FOOTER */}
						<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5">
							<div className="flex items-center justify-between w-full">
								<Button type="button" disabled={isCreatingServer} onClick={handleClose} variant="ghost" className="text-zinc-400 hover:text-white">
									Back
								</Button>

								<Button type="submit" disabled={!isValid || isCreatingServer} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold min-w-25">
									{isCreatingServer ? <Loader2 className="animate-spin" size={16} /> : "Create"}
								</Button>
							</div>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
