// /components/chat/chat-item.tsx
"use client";

import { Edit, ShieldAlert, ShieldCheck, Trash, FileIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UserAvatar } from "../user/user-avatar";
import { MemberProfile } from "@/schemas/member";
import { useMutation } from "@tanstack/react-query";
import { useAction } from "next-safe-action/hooks";
import { editMessageAction, markMessageAsDeletedAction } from "@/actions/message";
import { toast } from "sonner";
import TextareaAutoSize from "react-textarea-autosize";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";

interface ChatItemProps {
	id: string;
	content: string;
	member: MemberProfile;
	timestamp: string;
	fileUrl: string | null;
	deleted: boolean;
	currentMember: MemberProfile;
	isUpdated: boolean;
	socketUrl: string;
	socketQuery: Record<string, string>;
	channelId: string;
}

const roleIconMap = {
	GUEST: null,
	MODERATOR: <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />,
	ADMIN: <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />,
};

export const ChatItem = ({ id, content, member, timestamp, fileUrl, deleted, currentMember, isUpdated, channelId }: ChatItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);
	const { onOpen } = useModal();

	const isAdmin = currentMember.role === "ADMIN";
	const isOwner = currentMember.profileId === member.profile.id;
	const canDeleteMessage = !deleted && (isAdmin || isOwner);
	const canEditMessage = !deleted && isOwner && !fileUrl;
	const isPDF = fileUrl?.endsWith(".pdf");
	const isImage = !isPDF && fileUrl;

	const { executeAsync: editMessage } = useAction(editMessageAction, {
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to update message");
		},
	});

	const { executeAsync: deleteMessage } = useAction(markMessageAsDeletedAction, {
		onError: ({ error }) => {
			toast.error(error.serverError || "Failed to delete message");
		},
	});

	// Escape to cancel editing
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isEditing) {
				setIsEditing(false);
				setEditedContent(content);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isEditing, content]);

	// Edit mutation
	const editMutation = useMutation({
		mutationFn: async (newContent: string) => {
			const result = await editMessage({
				messageId: id,
				content: newContent,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		onSuccess: () => {
			setIsEditing(false);

			// ❌ REMOVE THIS - Pusher handles updates now!
			// queryClient.invalidateQueries({ queryKey: ["messages"] });

			// ✅ Optional: Show success toast (or remove for cleaner UX)
			// toast.success("Message updated");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to edit message");
		},
	});

	// Delete mutation
	const deleteMutation = useMutation({
		mutationFn: async () => {
			const result = await deleteMessage({
				messageId: id,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		onSuccess: () => {
			// ❌ REMOVE THIS - Pusher handles updates now!
			// queryClient.invalidateQueries({ queryKey: ["messages"] });
			// ✅ Optional: Show success toast
			// toast.success("Message deleted");
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete message");
		},
	});

	const handleSaveEditing = () => {
		if (!editedContent.trim() || editedContent === content) {
			setIsEditing(false);
			setEditedContent(content);
			return;
		}
		editMutation.mutate(editedContent);
	};

	const handleDelete = () => {
		// ✅ Add confirmation for better UX
		if (confirm("Are you sure you want to delete this message?")) {
			deleteMutation.mutate();
		}
	};

	return (
		<div className="relative group flex items-start gap-x-4 py-2 px-6 hover:bg-white/3 transition-colors w-full">
			{/* Avatar */}
			<div className="cursor-pointer hover:drop-shadow-lg transition shrink-0 mt-0.5" onClick={() => onOpen("userProfile", { member })}>
				<UserAvatar name={member.profile.name} src={member.profile.imageUrl ?? undefined} className="h-8 w-8" />
			</div>

			{/* Message Body */}
			<div className="flex flex-col w-full min-w-0">
				{/* Header */}
				<div className="flex items-center gap-x-2">
					<div className="flex items-center gap-x-1">
						<span className="font-bold text-sm text-white hover:underline cursor-pointer" onClick={() => onOpen("userProfile", { member })}>
							{member.profile.name}
						</span>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>{roleIconMap[member.role]}</TooltipTrigger>
								<TooltipContent className="bg-black text-white text-xs border-white/10">{member.role}</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<span className="text-[10px] text-zinc-500">{timestamp}</span>
				</div>

				{/* Deleted State */}
				{deleted && (
					<p className="text-sm text-zinc-500 italic mt-1">
						<Trash className="w-3 h-3 inline mr-1" />
						This message has been deleted
					</p>
				)}

				{/* Image Attachment */}
				{isImage && !deleted && (
					<a
						href={fileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="relative aspect-square rounded-2xl mt-2 overflow-hidden border border-white/10 flex items-center bg-black/20 h-48 w-48 hover:scale-[1.02] transition-transform shadow-md"
					>
						<Image src={fileUrl} alt={content} fill className="object-cover" />
					</a>
				)}

				{/* PDF Attachment */}
				{isPDF && !deleted && (
					<div className="relative flex items-center p-4 mt-2 rounded-xl bg-white/5 border border-white/10 w-fit gap-x-3 hover:bg-white/10 transition-colors">
						<FileIcon className="h-8 w-8 text-indigo-400" />
						<a href={fileUrl ?? undefined} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-300 hover:text-indigo-200 hover:underline font-semibold">
							PDF Document
						</a>
					</div>
				)}

				{/* View Mode */}
				{!fileUrl && !isEditing && !deleted && (
					<p className={cn("text-[15px] text-zinc-300 mt-1 leading-relaxed font-normal", "wrap-break-word whitespace-pre-wrap")}>
						{content}
						{isUpdated && <span className="text-[10px] mx-2 text-zinc-500 select-none">(edited)</span>}
					</p>
				)}

				{/* Edit Mode */}
				{!fileUrl && isEditing && !deleted && (
					<div className="mt-2 w-full">
						<div className="relative w-full rounded-xl bg-[#09090b] border border-indigo-500/30 ring-1 ring-indigo-500/20 overflow-hidden shadow-sm">
							<TextareaAutoSize
								minRows={1}
								maxRows={10}
								value={editedContent}
								onChange={(e) => setEditedContent(e.target.value)}
								disabled={editMutation.isPending}
								className="p-3 bg-transparent text-zinc-200 w-full text-[15px] focus:outline-none resize-none font-sans leading-relaxed"
								onKeyDown={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSaveEditing();
									}
								}}
								autoFocus
							/>
						</div>

						{/* Helper Footer */}
						<div className="flex items-center gap-x-2 mt-2">
							<span className="text-[10px] text-zinc-500 font-medium">
								escape to{" "}
								<span
									className="hover:text-white cursor-pointer"
									onClick={() => {
										setIsEditing(false);
										setEditedContent(content);
									}}
								>
									cancel
								</span>{" "}
								• enter to{" "}
								<span className="text-indigo-400 cursor-pointer hover:underline" onClick={handleSaveEditing}>
									save
								</span>
							</span>

							<Button
								size="sm"
								variant="default"
								disabled={editMutation.isPending}
								onClick={handleSaveEditing}
								className="ml-auto h-6 text-[10px] bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-0"
							>
								{editMutation.isPending ? "Saving..." : "Save"}
							</Button>
						</div>
					</div>
				)}
			</div>

			{/* Floating Action Bar */}
			{canDeleteMessage && (
				<div className="hidden group-hover:flex items-center gap-x-1 absolute -top-3 right-5 bg-[#09090b] border border-white/10 p-1 rounded-lg shadow-xl z-20">
					{canEditMessage && (
						<ActionTooltip label="Edit">
							<button
								title="Edit Message"
								onClick={() => setIsEditing(!isEditing)}
								disabled={editMutation.isPending}
								className="cursor-pointer hover:bg-white/10 p-1.5 rounded-md text-zinc-400 hover:text-white transition disabled:opacity-50"
							>
								<Edit className="w-3.5 h-3.5" />
							</button>
						</ActionTooltip>
					)}
					<ActionTooltip label="Delete">
						<button
							title="Delete Message"
							onClick={handleDelete}
							disabled={deleteMutation.isPending}
							className="cursor-pointer hover:bg-red-500/10 p-1.5 rounded-md text-zinc-400 hover:text-red-500 transition disabled:opacity-50"
						>
							<Trash className="w-3.5 h-3.5" />
						</button>
					</ActionTooltip>
				</div>
			)}
		</div>
	);
};

function ActionTooltip({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side="top" className="bg-black border-white/10 text-xs font-semibold">
					{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
