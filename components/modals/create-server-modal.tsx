"use client";

import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { createServer } from "@/actions/server";
import { toast } from "sonner";
import { Loader2, ShieldCheck, Terminal } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FluxInput } from "./inputs/flux-input";
import { ServerImageUpload } from "./inputs/server-image-upload";

// Re-define schema locally to ensure form types match strict Zod expectations
const formSchema = z.object({
	name: z.string().min(1, { message: "Server name is required" }),
	imageUrl: z.string().min(1, { message: "Server icon is required" }),
});

type FormData = z.infer<typeof formSchema>;

export const CreateServerModal = () => {
	const { isOpen, onClose, type } = useModal();
	const router = useRouter();

	const isModalOpen = isOpen && type === "createServer";

	const methods = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			imageUrl: "",
		},
	});

	const {
		handleSubmit,
		control,
		reset,
		formState: { isValid, isSubmitting: isFormSubmitting }, // RHF submitting state
	} = methods;

	// Next-Safe-Action Hook
	const { execute, status } = useAction(createServerAction, {
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
		onError: ({ error }) => {
			toast.error("DEPLOYMENT_FAILED", {
				description: "SYSTEM_HALT // CHECK_LOGS",
				icon: <Terminal className="text-red-500" size={16} />,
			});
			console.error(error);
		},
	});

	const isExecuting = status === "executing" || isFormSubmitting;

	const onSubmit = (values: FormData) => {
		execute(values);
	};

	const handleClose = () => {
		reset();
		onClose();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-[#09090b]/90 backdrop-blur-2xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl max-w-md gap-0">
				{/* HEADER */}
				<div className="pt-8 px-8 pb-6 border-b border-white/5 bg-white/[0.02]">
					<DialogTitle className="text-xl text-center font-black uppercase tracking-tight flex items-center justify-center gap-2">
						<Terminal size={18} className="text-primary" />
						Initialize_Server
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-500 font-mono text-[10px] mt-2 uppercase tracking-widest">Allocate_Resources // Define_Identity</DialogDescription>
				</div>

				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
						<div className="p-8 space-y-8">
							{/* 1. VISUAL INGEST */}
							<ServerImageUpload control={control} name="imageUrl" />

							{/* 2. CORE IDENTITY */}
							<Controller
								control={control}
								name="name"
								render={({ field, fieldState }) => (
									<FluxInput field={field} fieldState={fieldState} fieldTitle="Server_Designation" nameInSchema="name" placeholder="e.g. TITAN_ROVER_TEAM" />
								)}
							/>
						</div>

						{/* FOOTER */}
						<DialogFooter className="bg-black/40 px-8 py-6 border-t border-white/5 flex flex-row items-center justify-between gap-4">
							<Button type="button" disabled={isExecuting} onClick={handleClose} variant="ghost" className="text-zinc-500 hover:text-white hover:bg-white/5 font-mono text-xs uppercase">
								Abort
							</Button>

							<Button
								type="submit"
								disabled={!isValid || isExecuting}
								className="bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] font-bold text-xs uppercase tracking-widest px-8 transition-all"
							>
								{isExecuting ? (
									<span className="flex items-center gap-2">
										<Loader2 className="animate-spin" size={14} /> INITIALIZING...
									</span>
								) : (
									"Deploy_Server"
								)}
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
