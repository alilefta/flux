// /components/chat/chat-item.tsx
"use client";

import { ShieldAlert, ShieldCheck, Trash, FileIcon, FileText, Pin } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UserAvatar } from "../user/user-avatar";
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useModal } from "@/hooks/use-modal-store";
import Link from "next/link";
import { MessageReactions } from "./message-reactions";
import { useChatStore } from "@/hooks/use-chat-store";
import { ReplyToMessage } from "./reply-to-message";
import { ChatItemActions } from "./chat-item-actions";
import { ChatEditForm } from "./chat-edit-form";
import { FileAttachment } from "@/schemas/file-attachement.base";
import { MessageReaction } from "@/schemas/message-reaction.base";
import { ChatType, MessageSender, ReplyMessageUI } from "@/schemas/composed/shared.base";
import { QUERY_KEYS } from "@/lib/query-keys";

// ✅ Import BOTH sets of actions
import { pinMessageAction as pinChannelMsg } from "@/actions/message";
import { addReactionAction as reactChannelMsg } from "@/actions/reaction";

import { pinDirectMessageAction as pinDMMsg } from "@/actions/direct-message";
import { addDirectReactionAction as reactDMMsg } from "@/actions/reaction";
import { ChannelMessage } from "@/schemas/message";
import { DirectChatMessage } from "@/schemas/composed/direct-message.details";
interface ChatItemProps {
	id: string;
	content: string;
	sender: MessageSender;
	currentMember: MessageSender;
	timestamp: string;
	fileUrl: string | null; // deprecated
	attachments: FileAttachment[];
	deleted: boolean;
	isUpdated: boolean;
	contextId: string;
	reactions: MessageReaction[];
	replyTo?: ReplyMessageUI;
	pinned: boolean;
	chatType: ChatType; // channel | conversation
}

const roleIconMap = {
	GUEST: null,
	MODERATOR: <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />,
	ADMIN: <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />,
};

export const ChatItem = React.memo(
	function ChatItem({ id, content, sender, timestamp, deleted, currentMember, isUpdated, attachments = [], reactions, replyTo, pinned, chatType, contextId }: ChatItemProps) {
		const queryClient = useQueryClient();
		const [isEditing, setIsEditing] = useState(false);
		const isOptimistic = id.startsWith("optimistic-");

		const onOpen = useModal((state) => state.onOpen);
		const setReplyingTo = useChatStore((state) => state.setReplyingTo);

		// --- PERMISSIONS ---
		const isAdmin = currentMember.role === "ADMIN";
		const isModerator = currentMember.role === "MODERATOR";
		const isOwner = currentMember.profileId === sender.profileId;

		// Delete: Owner or Admin/Mod (if in channel)
		const canDeleteMessage = !deleted && (isOwner || (chatType === "channel" && (isAdmin || isModerator)));
		const canEditMessage = !deleted && isOwner;

		// Pin: Anyone in DM, Admin/Mod in Channel
		const canPinMessage = chatType === "conversation" || isAdmin || isModerator;

		const hasAttachments = attachments && attachments.length > 0;
		const hasContent = content && content.trim().length > 0;

		const queryKey = chatType === "channel" ? QUERY_KEYS.channel.messages(contextId) : QUERY_KEYS.dm.messages(contextId);

		const handleReply = () => {
			const replyMessage: ReplyMessageUI = {
				id,
				content,
				attachments: attachments || [],
				sender: sender,
			};

			setReplyingTo(replyMessage);
		};

		const reactionMutation = useMutation({
			mutationFn: async ({ emoji, optimisticId }: { emoji: string; optimisticId: string }) => {
				const action = chatType === "channel" ? reactChannelMsg : reactDMMsg;
				const result = await action({ messageId: id, emoji, optimisticId });

				if (result?.serverError) throw new Error(result.serverError);
				return result?.data;
			},
			onMutate: async ({ emoji, optimisticId }, { client }) => {
				await queryClient.cancelQueries({ queryKey });

				type QueryDataShape = InfiniteData<ChannelMessage[] | DirectChatMessage[], Date | undefined>;

				// 2. Snapshot the previous value
				const previousMessages = queryClient.getQueryData<QueryDataShape>(queryKey);

				// 3. Create Optimistic Reaction
				const optimisticReaction: MessageReaction = {
					id: optimisticId,
					emoji: emoji,
					profileId: currentMember.profileId,
					messageId: chatType === "channel" ? id : null,
					directMessageId: chatType === "conversation" ? id : null,
					createdAt: new Date(),
				};

				// 4. Update Cache
				queryClient.setQueryData<QueryDataShape>(queryKey, (oldData) => {
					if (!oldData || !oldData.pages) return oldData; // ✅ Safe return

					// Check if user already reacted with this emoji in the current UI state
					// to prevent optimistic spamming
					let alreadyReacted = false;

					const newPages = oldData.pages.map((page) =>
						page.map((msg) => {
							if (msg.id === id) {
								const existingReactions = msg.reactions || [];
								alreadyReacted = existingReactions.some((r) => r.emoji === emoji && r.profileId === currentMember.profileId);

								if (alreadyReacted) return msg;

								return {
									...msg,
									reactions: [...existingReactions, optimisticReaction],
								};
							}
							return msg;
						}),
					);

					// If they already reacted, don't change the cache
					if (alreadyReacted) return oldData;

					return { ...oldData, pages: newPages };
				});

				return { previousMessages, optimisticId };
			},

			// We already added optimistic updates for this earlier, add onMutate here if needed!
			onError: (error, variables, context) => {
				// ❌ Rollback to the snapshot
				if (context?.previousMessages) {
					queryClient.setQueryData(queryKey, context.previousMessages);
				}

				// Only toast if it's not the "Already reacted" error, which is expected on rapid clicks
				if (!error.message.includes("Already reacted")) {
					toast.error("Failed to add reaction");
				}
			},
		});

		const removeReactionMutation = useMutation({
			mutationFn: async (emoji: string) => {
				// You need to ensure you have a removeAction for both channel and DM
				// Assuming you exported `removeReactionAction` and `removeDirectReactionAction`
				const action = chatType === "channel" ? removeReactionAction : removeDirectReactionAction;
				const result = await action({ messageId: id, emoji });

				if (result?.serverError) throw new Error(result.serverError);
				return result?.data;
			},
			onMutate: async (emoji: string) => {
				await queryClient.cancelQueries({ queryKey });
				const previousMessages = queryClient.getQueryData<QueryDataShape>(queryKey);

				queryClient.setQueryData<QueryDataShape>(queryKey, (oldData) => {
					if (!oldData || !oldData.pages) return oldData;

					const newPages = oldData.pages.map((page) =>
						page.map((msg) => {
							if (msg.id === id) {
								return {
									...msg,
									// Filter out the specific reaction from this user
									reactions: (msg.reactions || []).filter((r) => !(r.emoji === emoji && r.profileId === currentMember.profileId)),
								};
							}
							return msg;
						}),
					);

					return { ...oldData, pages: newPages };
				});

				return { previousMessages };
			},
			onError: (error, variables, context) => {
				if (context?.previousMessages) {
					queryClient.setQueryData(queryKey, context.previousMessages);
				}
				toast.error("Failed to remove reaction");
			},
		});

		// 2. UPDATE THE CLICK HANDLER TO TOGGLE
		const handleReactionClick = useCallback(
			(emoji: string) => {
				// Prevent rapid clicking if a mutation is already running
				if (reactionMutation.isPending || removeReactionMutation.isPending) return;

				// Check if the user already reacted with this specific emoji
				const hasReacted = reactions?.some((r) => r.emoji === emoji && r.profileId === currentMember.profileId);

				if (hasReacted) {
					// ✅ REMOVE REACTION
					removeReactionMutation.mutate(emoji);
				} else {
					// ✅ ADD REACTION
					const optimisticId = `optimistic-${crypto.randomUUID()}`;
					reactionMutation.mutate({ emoji, optimisticId });
				}
			},
			[reactionMutation, removeReactionMutation, reactions, currentMember.profileId],
		);
		// 2. PIN MUTATION
		const pinMutation = useMutation({
			mutationFn: async () => {
				const action = chatType === "channel" ? pinChannelMsg : pinDMMsg;
				const result = await action({ messageId: id });

				if (result?.serverError) throw new Error(result.serverError);
				return result?.data;
			},
			onSuccess: (data) => {
				// Data will be uniquely shaped depending on the action, but both have `message.pinned`
				const isPinnedNow = data?.data.message?.pinned;
				toast.success(isPinnedNow ? "Message pinned" : "Message unpinned");
			},
			onError: (error) => toast.error(error.message || "Failed to pin message"),
		});

		const handleDelete = () => {
			onOpen("deleteMessage", {
				query: {
					messageId: id,
					chatType: chatType,
				},
			});
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
				{replyTo && <ReplyToMessage replyTo={replyTo!} onNavigateToReply={onNavigateToReply} />}

				{/* ======================= 2. MAIN MESSAGE ROW ======================= */}
				<div className="relative group flex items-start gap-x-3 py-1 px-4 hover:bg-white/2 transition-colors w-full mt-0.5">
					{/* Avatar */}
					<div className="cursor-pointer hover:drop-shadow-md transition shrink-0 mt-0.5" onClick={() => onOpen("userProfile", { sender })}>
						<UserAvatar name={sender.name} src={sender.imageUrl ?? undefined} className="h-8 w-8" />
					</div>

					{/* Content Column */}
					<div className="flex flex-col w-full min-w-0">
						{/* Header Metadata */}
						<div className="flex items-center gap-x-2">
							<div className="flex items-center gap-x-1">
								<span className="font-bold text-sm text-white hover:underline cursor-pointer" onClick={() => onOpen("userProfile", { sender })}>
									{sender.name}
								</span>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>{roleIconMap[sender.role]}</TooltipTrigger>
										<TooltipContent className="bg-black text-white text-xs border-white/10">{sender.role}</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
							<span className="text-[10px] text-zinc-500 select-none">{timestamp}</span>

							{/* ✅ VISUAL: Pin Icon Indicator */}
							{pinned && (
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger>
											<Pin className="w-3 h-3 text-zinc-400 rotate-45 ml-1" />
										</TooltipTrigger>
										<TooltipContent className="bg-black border-white/10 text-xs">Pinned by a moderator</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							)}
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
						{!deleted && <MessageReactions reactions={reactions ?? []} currentProfileId={currentMember.profileId} onReactionClick={handleReactionClick} />}
						{/* Edit Mode */}

						{/* ✅ EDIT MODE: Render the isolated form */}
						{!deleted && isEditing && (
							<ChatEditForm messageId={id} initialContent={content} onCancel={() => setIsEditing(false)} onSuccess={() => setIsEditing(false)} chatType={chatType} />
						)}
					</div>
				</div>

				{/* ======================= 3. ACTION BAR ======================= */}
				<ChatItemActions
					canDeleteMessage={canDeleteMessage}
					canEditMessage={canEditMessage}
					isDeleted={deleted}
					isEditPending={isEditing}
					isDeletePending={false}
					isOptimistic={isOptimistic}
					onReply={handleReply}
					onEdit={() => setIsEditing(true)}
					onDelete={handleDelete}
					onReaction={handleReactionClick}
					canPinMessage={canPinMessage}
					isPinned={pinned}
					onPin={() => pinMutation.mutate()}
				/>
			</div>
		);
	},
	// ✅ Custom comparison with null-safe checks
	(prevProps, nextProps) => {
		// Different message ID = always re-render
		if (prevProps.id !== nextProps.id) return false;

		// Content changed
		if (prevProps.content !== nextProps.content) return false;

		// Delete status changed
		if (prevProps.deleted !== nextProps.deleted) return false;

		// Edit status changed
		if (prevProps.isUpdated !== nextProps.isUpdated) return false;

		if (prevProps.pinned !== nextProps.pinned) return false; // ✅ Re-render if pin state changes

		// ✅ Null-safe attachment comparison
		const prevAttachments = prevProps.attachments || [];
		const nextAttachments = nextProps.attachments || [];

		if (prevAttachments.length !== nextAttachments.length) return false;

		// Check if attachment URLs changed
		const prevAttachmentUrls = prevAttachments.map((a) => a.url).join(",");
		const nextAttachmentUrls = nextAttachments.map((a) => a.url).join(",");
		if (prevAttachmentUrls !== nextAttachmentUrls) return false;

		// ✅ Null-safe reaction comparison
		const prevReactions = prevProps.reactions || [];
		const nextReactions = nextProps.reactions || [];

		if (prevReactions.length !== nextReactions.length) return false;

		// Create a signature of reactions (emoji + count)
		const getReactionSignature = (reactions: MessageReaction[]) => {
			const grouped: Record<string, number> = {};
			reactions.forEach((r) => {
				grouped[r.emoji] = (grouped[r.emoji] || 0) + 1;
			});
			return JSON.stringify(grouped);
		};

		const prevReactionSig = getReactionSignature(prevReactions);
		const nextReactionSig = getReactionSignature(nextReactions);

		if (prevReactionSig !== nextReactionSig) return false;

		// If all checks passed, don't re-render
		return true;
	},
);

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
