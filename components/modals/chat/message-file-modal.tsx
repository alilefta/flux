"use client";

import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { sendMessageAction } from "@/actions/message";
import { toast } from "sonner";
import { Loader2, Paperclip } from "lucide-react";
import * as z from "zod";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/modals/inputs/file-upload";

const formSchema = z.object({
	fileUrls: z.array(z.string()).min(1, { message: "At least one file is required" }),
});

type FormData = z.infer<typeof formSchema>;

export const MessageFileModal = () => {
	const { isOpen, onClose, type, data } = useModal();
	const isModalOpen = isOpen && type === "messageFile";
	const { channelId } = data.query || {}; // We pass channelId via query in onOpen

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fileUrls: [],
		},
	});

	const { execute, status } = useAction(sendMessageAction, {
		onSuccess: () => {
			form.reset();
			onClose();
			toast.success("File sent");
		},
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to send file");
		},
	});

	const isLoading = status === "executing";

	const onSubmit = async (values: FormData) => {
		if (!channelId) return;

		try {
			// ✅ Send messages sequentially or parallel
			// For chat order, sequential is safer, but parallel is faster.
			const promises = values.fileUrls.map((url) =>
				execute({
					content: url, // For now content is the URL
					fileUrl: url,
					channelId: channelId as string,
				}),
			);

			await Promise.all(promises);

			toast.success("Files sent");
			form.reset();
			onClose();
		} catch (error) {
			toast.error("Some files failed to send");
		}
	};

	const handleClose = () => {
		form.reset();
		onClose();
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-lg">
				<DialogHeader className="pt-8 px-6 pb-2">
					<DialogTitle className="text-2xl text-center font-bold flex items-center justify-center gap-2">
						<Paperclip className="w-6 h-6 text-indigo-400" />
						Attachments
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-400">Upload images, videos, or documents.</DialogDescription>
				</DialogHeader>

				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="px-6 pt-4">
							<Controller
								control={form.control}
								name="fileUrls"
								render={({ field }) => (
									// We don't need FluxInput here, just the file uploader
									<FileUpload name="fileUrl" />
								)}
							/>
						</div>

						<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5 mt-4">
							<Button type="button" disabled={isLoading} variant="ghost" onClick={handleClose} className="text-zinc-400 hover:text-white">
								Cancel
							</Button>
							<Button disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[100px]">
								{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Send"}
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
