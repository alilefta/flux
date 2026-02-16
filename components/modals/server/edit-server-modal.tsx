"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { updateServerAction } from "@/actions/server";
import { toast } from "sonner";
import { useEffect } from "react";
import { Loader2, Settings } from "lucide-react";
import * as z from "zod";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FluxInput } from "@/components/custom-ui/inputs/flux-input";
import { ServerImageUpload } from "@/components/modals/inputs/server-image-upload";
import { InferSafeActionFnResult } from "next-safe-action";

// Local schema definition to match action input
const formSchema = z.object({
	name: z.string().min(1, { message: "Server name is required" }),
	imageUrl: z.string().min(1, { message: "Server icon is required" }),
	serverId: z.string(),
});

type FormData = z.infer<typeof formSchema>;

type UpdateServerActionResult = InferSafeActionFnResult<typeof updateServerAction>;

export const EditServerModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);
	const router = useRouter();

	const isModalOpen = isOpen && type === "editServer";
	const { server } = data;

	const methods = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			imageUrl: "",
			serverId: "",
		},
	});

	const { handleSubmit, setValue, control, reset } = methods;

	useEffect(() => {
		if (server) {
			setValue("name", server.name);
			setValue("imageUrl", server.imageUrl);
			setValue("serverId", server.id);
		}
	}, [server, setValue, isModalOpen]);

	const { execute, status } = useAction(updateServerAction, {
		onSuccess: ({ data }) => {
			if (data?.success) {
				onClose();
				router.refresh();
				toast.success("Server Updated");
			}
		},
		onError: ({ error }) => {
			handleActionError(error);
		},
	});

	const handleActionError = (error: { serverError?: UpdateServerActionResult["serverError"]; validationErrors?: UpdateServerActionResult["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("An error occured while processing your input.");

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error(`An error occured: ${error.serverError}`);
		}
	};

	const isLoading = status === "executing";

	const onSubmit = (values: FormData) => {
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
					<DialogTitle className="text-2xl text-center font-bold flex items-center justify-center gap-2">
						<Settings className="w-6 h-6 text-zinc-400" />
						Server Settings
					</DialogTitle>
				</DialogHeader>

				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="p-6 space-y-6">
							{/* IMAGE UPLOAD */}
							<div className="flex justify-center">
								<ServerImageUpload />
							</div>

							{/* NAME INPUT */}
							<Controller
								control={control}
								name="name"
								render={({ field, fieldState }) => <FluxInput field={field} fieldState={fieldState} nameInSchema="name" fieldTitle="Server Name" placeholder="Enter server name" />}
							/>
						</div>

						<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5">
							<Button type="button" disabled={isLoading} variant="ghost" onClick={handleClose} className="text-zinc-400 hover:text-white">
								Cancel
							</Button>
							<Button disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[100px]">
								{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Save Changes"}
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
