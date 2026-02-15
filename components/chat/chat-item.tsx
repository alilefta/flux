// /components/chat/chat-item.tsx
"use client";

import { Edit, ShieldAlert, ShieldCheck, Trash, FileIcon, FileText, CornerUpLeft } from "lucide-react";
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
import { ActionTooltip } from "../custom-ui/tooltip/action-tooltip";
import { ChannelMessage, FileAttachment, MessageReaction } from "@/schemas/message";
import Link from "next/link";
import { addReactionAction } from "@/actions/reaction";
import { ReactionPicker } from "./reaction-picker";
import { MessageReactions } from "./message-reactions";
import { useChatStore } from "@/hooks/use-chat-store";
import { ReplyToMessage } from "./reply-to-message";

interface ChatItemProps {
	id: string;
	content: string;
	member: MemberProfile;
	timestamp: string;
	fileUrl: string | null; // deprecated
	attachments: FileAttachment[];
	deleted: boolean;
	currentMember: MemberProfile;
	isUpdated: boolean;
	socketUrl: string;
	socketQuery: Record<string, string>;
	channelId: string;
	reactions: MessageReaction[];
	replyTo?: ChannelMessage | null;
}

const roleIconMap = {
	GUEST: null,
	MODERATOR: <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />,
	ADMIN: <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />,
};

export const ChatItem = ({ id, content, member, timestamp, fileUrl, deleted, currentMember, isUpdated, attachments = [], reactions, replyTo }: ChatItemProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedContent, setEditedContent] = useState(content);

	const isOptimistic = id.startsWith("optimistic-");

	const { onOpen } = useModal();

	const { setReplyingTo } = useChatStore();

	const isAdmin = currentMember.role === "ADMIN";
	const isOwner = currentMember.profileId === member.profile.id;
	const canDeleteMessage = !deleted && (isAdmin || isOwner);

	const canEditMessage = !deleted && isOwner && !fileUrl;
	const hasAttachments = attachments && attachments.length > 0;
	const hasContent = content && content.trim().length > 0;

	const [isReactionPickerOpen, setIsReactionPickerOpen] = useState(false);

	const handleReply = () => {
		const messageObject: ChannelMessage = {
			id,
			content,
			member,
			attachments: attachments || [],
			reactions: [], // Reactions aren't critical for the "Reply Preview" UI
			createdAt: new Date(), // These dates aren't used in preview, but required by type
			updatedAt: new Date(),
			deleted: false,
			edited: false,
			pinned: false,
			replyToId: null,
			replyTo: null,
			channelId: "", // Not used in preview
			memberId: member.id,
			fileUrl: null,
		};

		setReplyingTo(messageObject);
	};

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

	const { executeAsync: addReaction } = useAction(addReactionAction);

	const reactionMutation = useMutation({
		mutationFn: async (emoji: string) => {
			const result = await addReaction({
				messageId: id,
				emoji,
			});

			if (result?.serverError) {
				throw new Error(result.serverError);
			}

			return result?.data;
		},
		onError: (error) => {
			toast.error(error.message || "Failed to add reaction");
		},
	});

	const handleReactionClick = (emoji: string) => {
		reactionMutation.mutate(emoji);
	};

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

	// ✅ 1. Navigation Logic
	const onNavigateToReply = () => {
		if (!replyTo) return;
		const replyElement = document.getElementById(`message-${replyTo.id}`);
		if (replyElement) {
			replyElement.scrollIntoView({ behavior: "smooth", block: "center" });
			replyElement.classList.add("animate-flash");
			setTimeout(() => replyElement.classList.remove("animate-flash"), 1000);
		} else {
			toast.info("Message is too old to view.", { description: "Scroll up to load older messages." });
		}
	};
	return (
		<div
			id={`message-${id}`}
			className={cn(
				"relative group flex flex-col w-full py-1 px-6 hover:bg-white/3 transition-colors",
				replyTo && "mt-1", // Add slight spacing if reply spine exists
			)}
		>
			{/* ======================= 1. REPLY SPINE ======================= */}
			{replyTo && <ReplyToMessage replyTo={replyTo} onNavigateToReply={onNavigateToReply} />}

			{/* ======================= 2. MAIN MESSAGE ROW ======================= */}
			<div className="relative group flex items-start gap-x-3 py-1 px-4 hover:bg-white/2 transition-colors w-full mt-0.5">
				{/* Avatar */}
				<div className="cursor-pointer hover:drop-shadow-md transition shrink-0 mt-0.5" onClick={() => onOpen("userProfile", { member })}>
					<UserAvatar name={member.profile.name} src={member.profile.imageUrl ?? undefined} className="h-8 w-8" />
				</div>

				{/* Content Column */}
				<div className="flex flex-col w-full min-w-0">
					{/* Header Metadata */}
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
						<span className="text-[10px] text-zinc-500 select-none">{timestamp}</span>
					</div>

					{/* Render Deleted State */}
					{deleted && (
						<p className="text-sm text-zinc-500 italic mt-1 flex items-center gap-1">
							<Trash className="w-3 h-3" />
							This message has been deleted.
						</p>
					)}

					{/* Render Text Content */}
					{!deleted && hasContent && !isEditing && (
						<p className={cn("text-[15px] text-zinc-300 mt-1 leading-relaxed font-normal", "whitespace-pre-wrap wrap-break-wor")}>
							{content}
							{isUpdated && <span className="text-[10px] mx-2 text-zinc-500 select-none">(edited)</span>}
						</p>
					)}

					{/* Render Attachments */}
					{!deleted && hasAttachments && (
						<div className="mt-2 flex flex-wrap gap-3">
							{attachments.map((file) => (
								<AttachmentItem key={file.id} file={file} />
							))}
						</div>
					)}

					{/* Render Reactions */}
					{!deleted && <MessageReactions reactions={reactions} currentProfileId={currentMember.profile.id} onReactionClick={handleReactionClick} />}

					{/* Edit Mode */}
					{!deleted && isEditing && (
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
			</div>

			{/* ======================= 3. ACTION BAR ======================= */}
			{canDeleteMessage && (
				<div
					className={cn(
						"flex items-center gap-x-1 absolute -top-3 right-5 bg-[#09090b] border border-white/10 p-1 rounded-lg shadow-xl z-20 transition-opacity duration-200",
						isReactionPickerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto",
					)}
				>
					{!deleted && <ReactionPicker onSelect={handleReactionClick} onOpenChange={setIsReactionPickerOpen} />}

					<ActionTooltip label="Reply">
						<button
							title="Reply to this message"
							onClick={handleReply}
							disabled={isOptimistic}
							className={cn(
								"cursor-pointer hover:bg-white/10 p-1.5 rounded-md text-zinc-400 hover:text-white transition",
								// Visual cue
								isOptimistic && "opacity-50 cursor-not-allowed",
							)}
						>
							<CornerUpLeft className="w-3.5 h-3.5" />
						</button>
					</ActionTooltip>

					{canEditMessage && (
						<ActionTooltip label="Edit">
							<button
								title="Edit message"
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
							title="Delete message"
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

// ======================= HELPER COMPONENT =======================
// Extracted to keep the main component clean
const AttachmentItem = ({ file }: { file: FileAttachment }) => {
	if (file.type === "image") {
		return (
			<Link
				href={file.url}
				target="_blank"
				rel="noopener noreferrer"
				className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition group bg-black/20"
			>
				<Image src={file.url} alt={file.name} fill className="object-cover group-hover:scale-105 transition duration-300" sizes="(max-width: 768px) 100vw, 192px" />
			</Link>
		);
	}

	// Videos
	if (file.type === "video") {
		return (
			<div key={file.id} className="relative">
				<video src={file.url} controls className="max-w-md rounded-xl border border-white/10 max-h-100!" />
				<p className="text-[10px] text-zinc-500 mt-1 truncate max-w-md">{file.name}</p>
			</div>
		);
	}

	// Text files
	if (file.type === "text" || file.type === "code") {
		return (
			<Link
				key={file.id}
				href={file.url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition min-w-60"
			>
				<FileText className="h-8 w-8 text-emerald-400 shrink-0" />
				<div className="flex-1 min-w-0">
					<p className="text-sm font-semibold text-white truncate">{file.name}</p>
					<p className="text-xs text-zinc-500 uppercase">{file.type}</p>
				</div>
			</Link>
		);
	}

	if (file.type === "pdf") {
		return (
			<Link
				href={file.url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-3 p-3 rounded-xl bg-[#1e1e22] border border-white/5 hover:bg-[#27272a] transition min-w-50 group"
			>
				<div className="h-10 w-10 bg-rose-500/10 rounded-lg flex items-center justify-center group-hover:bg-rose-500/20 transition">
					<FileIcon className="h-5 w-5 text-rose-400" />
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-sm font-medium text-zinc-200 truncate">{file.name}</p>
					<p className="text-[10px] text-zinc-500 uppercase">PDF</p>
				</div>
			</Link>
		);
	}

	// Default for other files
	return (
		<Link
			href={file.url}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-3 p-3 rounded-xl bg-[#1e1e22] border border-white/5 hover:bg-[#27272a] transition min-w-50 group"
		>
			<div className="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500/20 transition">
				<FileText className="h-5 w-5 text-indigo-400" />
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-sm font-medium text-zinc-200 truncate">{file.name}</p>
				<p className="text-[10px] text-zinc-500 uppercase">{file.type}</p>
			</div>
		</Link>
	);
};
