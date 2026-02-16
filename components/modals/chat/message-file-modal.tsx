"use client";

import { useForm, FormProvider, useWatch } from "react-hook-form";
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
import { ChannelMessage } from "@/schemas/message";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { MemberProfile } from "@/schemas/member";

type QueryDataShape = InfiniteData<ChannelMessage[], Date | undefined>;

const formSchema = z.object({
	fileUrls: z
		.array(
			z.object({
				url: z.string().url(),
				name: z.string(),
				type: z.string(),
				size: z.number().optional(),
			}),
		)
		.min(1, "At least one file is required")
		.max(10, "Maximum 10 files allowed"),
});
type FormData = z.infer<typeof formSchema>;

export const MessageFileModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);

	const isModalOpen = isOpen && type === "messageFile";
	const queryClient = useQueryClient();

	const { channelId, member } =
		(data.query as {
			channelId: string;
			member: MemberProfile;
		}) || {};

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fileUrls: [],
		},
	});

	const { executeAsync: sendMessage } = useAction(sendMessageAction);

	const mutation = useMutation({
		mutationFn: async (files: FormData["fileUrls"]) => {
			const result = await sendMessage({
				content: "", // Empty content for file-only message
				files,
				channelId: channelId as string,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},

		onMutate: async (files) => {
			if (!channelId || !member) {
				console.error("Missing channelId or member");
				return;
			}

			await queryClient.cancelQueries({ queryKey: ["messages", channelId] });

			const previousMessages = queryClient.getQueryData<QueryDataShape>(["messages", channelId]);

			// ✅ Create optimistic message with file metadata
			const optimisticMessage: ChannelMessage = {
				id: `optimistic-${crypto.randomUUID()}`,
				channelId: channelId as string,
				content: "",
				fileUrl: null,
				attachments: files.map((file) => ({
					id: `temp-${crypto.randomUUID()}`,
					url: file.url,
					name: file.name,
					type: file.type,
					size: file.size || null,
					messageId: `optimistic-${crypto.randomUUID()}`,
					createdAt: new Date(),
				})),
				createdAt: new Date(),
				updatedAt: new Date(),
				deleted: false,
				edited: false,
				pinned: false,
				replyToId: null,
				member: member as MemberProfile,
				memberId: member.id,
			};

			queryClient.setQueryData<QueryDataShape>(["messages", channelId], (oldData) => {
				if (!oldData?.pages) return oldData;

				const newPages = [...oldData.pages];
				newPages[0] = [optimisticMessage, ...newPages[0]];

				return { ...oldData, pages: newPages };
			});

			console.log(`✨ Optimistic: ${files.length} files`);

			return { previousMessages };
		},

		onSuccess: () => {
			const fileCount = form.getValues("fileUrls").length;
			form.reset();
			onClose();
			toast.success(`${fileCount} file${fileCount > 1 ? "s" : ""} sent!`);
		},

		onError: (error, _variables, context) => {
			toast.error(error.message || "Failed to send files");

			if (context?.previousMessages && channelId) {
				queryClient.setQueryData(["messages", channelId], context.previousMessages);
			}
		},
	});

	const onSubmit = async (values: FormData) => {
		if (!channelId) {
			toast.error("Channel ID missing");
			return;
		}

		mutation.mutate(values.fileUrls);
	};

	const handleClose = () => {
		form.reset();
		onClose();
	};

	const fileCount =
		useWatch({
			name: "fileUrls",
			control: form.control,
		})?.length || 0;

	const isLoading = mutation.isPending;

	return (
		<Dialog open={isModalOpen} onOpenChange={handleClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-lg">
				<DialogHeader className="pt-8 px-6 pb-2">
					<DialogTitle className="text-2xl text-center font-bold flex items-center justify-center gap-2">
						<Paperclip className="w-6 h-6 text-indigo-400" />
						Attachments
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-400">Upload multiple images, videos, or documents (max 10)</DialogDescription>
				</DialogHeader>

				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="message-file-form">
						<div className="px-6 pt-4">
							<FileUpload name="fileUrls" />
						</div>

						<DialogFooter className="bg-zinc-900/50 px-6 py-4 border-t border-white/5 mt-4">
							<Button type="button" disabled={isLoading} variant="ghost" onClick={handleClose} className="text-zinc-400 hover:text-white">
								Cancel
							</Button>
							<Button form="message-file-form" type="submit" disabled={isLoading || fileCount === 0} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-32">
								{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : `Send ${fileCount} file${fileCount !== 1 ? "s" : ""}`}
							</Button>
						</DialogFooter>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
