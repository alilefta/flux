"use client";

import { useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import { Search, Loader2, X, MessageSquare, AlertCircle, FileIcon } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { searchMessagesAction } from "@/actions/message";
import { useAction } from "next-safe-action/hooks";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user/user-avatar";
import useDebounce from "@/hooks/useDebounce";
import { Skeleton } from "@/components/ui/skeleton"; // Ensure you have this shadcn component

export const ChatSearchModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);

	// Use atomic selectors if your store supports it, otherwise this is fine
	const isModalOpen = isOpen && type === "searchMessages";
	const { channelId } = data.query || {};

	const [searchTerm, setSearchTerm] = useState("");
	const debouncedTerm = useDebounce({ value: searchTerm, delay: 300 }); // Faster debounce feels snappier

	const { executeAsync: searchMessages } = useAction(searchMessagesAction);

	const {
		data: results,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ["search", channelId, debouncedTerm],
		queryFn: async () => {
			if (!debouncedTerm) return [];
			const res = await searchMessages({ channelId: channelId as string, query: debouncedTerm });
			return res?.data?.messages || [];
		},
		enabled: !!debouncedTerm && isModalOpen,
		staleTime: 5000, // Keep results briefly
	});

	const onJump = (messageId: string) => {
		onClose();
		window.dispatchEvent(new CustomEvent("jump-to-message", { detail: { messageId } }));
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent showCloseButton={false} className="bg-[#141417]/95 border border-white/10 p-0 shadow-2xl sm:max-w-137.5 gap-0 rounded-2xl overflow-hidden">
				<DialogHeader className="sr-only">
					<DialogTitle>Search Messages</DialogTitle>
					<DialogDescription>Search Messages Dialog</DialogDescription>
				</DialogHeader>

				{/* --- HEADER --- */}
				<div className="flex items-center px-4 h-14 border-b border-white/5 bg-zinc-900/30">
					<Search className="w-4 h-4 text-zinc-500 mr-3 shrink-0" />
					<Input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search messages..."
						className="border-none bg-transparent! focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-zinc-500 px-0 h-full flex-1"
						autoFocus
					/>
					<div className="flex items-center gap-2">
						{isLoading && <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />}

						{/* Clear / Close Button */}
						{searchTerm ? (
							<button title="Close Search Dialog" onClick={() => setSearchTerm("")} className="p-1 rounded-md hover:bg-white/10 text-zinc-500 hover:text-zinc-300 transition">
								<X className="w-4 h-4" />
							</button>
						) : (
							<DialogClose asChild>
								<button className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-500 hover:text-zinc-300 transition font-mono">ESC</button>
							</DialogClose>
						)}
					</div>
				</div>

				{/* --- RESULTS AREA --- */}
				<ScrollArea className="max-h-100">
					<div className="p-2">
						{/* STATE: LOADING SKELETONS */}
						{isLoading && (
							<div className="space-y-2 p-2">
								{[1, 2, 3].map((i) => (
									<div key={i} className="flex gap-3 p-2">
										<Skeleton className="h-8 w-8 rounded-full bg-white/5" />
										<div className="space-y-1 flex-1">
											<Skeleton className="h-3 w-24 bg-white/5" />
											<Skeleton className="h-3 w-3/4 bg-white/5" />
										</div>
									</div>
								))}
							</div>
						)}

						{/* STATE: ERROR */}
						{isError && (
							<div className="flex flex-col items-center justify-center h-40 text-center space-y-3">
								<div className="p-3 bg-red-500/10 rounded-full">
									<AlertCircle className="w-6 h-6 text-red-500" />
								</div>
								<p className="text-sm text-zinc-400">Something went wrong. Please try again.</p>
							</div>
						)}

						{/* STATE: NO RESULTS */}
						{!isLoading && !isError && debouncedTerm && results?.length === 0 && (
							<div className="flex flex-col items-center justify-center h-60 text-center space-y-3">
								<div className="p-4 bg-white/5 rounded-full">
									<Search className="w-8 h-8 text-zinc-500" />
								</div>
								<div>
									<p className="text-sm font-medium text-zinc-300">No messages found</p>
									<p className="text-xs text-zinc-500 mt-1">
										We couldn&apos;t find any matches for <span className="text-indigo-400">&quot;{debouncedTerm}&quot;</span>
									</p>
								</div>
							</div>
						)}

						{/* STATE: EMPTY START */}
						{!isLoading && !debouncedTerm && (
							<div className="flex flex-col items-center justify-center h-60 text-center space-y-3 opacity-50">
								<MessageSquare className="w-10 h-10 text-zinc-600" />
								<p className="text-sm text-zinc-500">Search for messages, links, or files.</p>
							</div>
						)}

						{/* STATE: RESULTS LIST */}
						{!isLoading && results && (
							<div className="space-y-1">
								{results.map((msg) => (
									<button
										key={msg.id}
										onClick={() => onJump(msg.id)}
										className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition-all group flex gap-3 border border-transparent hover:border-white/5"
									>
										<UserAvatar src={msg.member.profile.imageUrl ?? undefined} className="h-9 w-9 mt-0.5 border border-white/10" />

										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<span className="font-bold text-zinc-200 text-sm">{msg.member.profile.name}</span>
												<span className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors">{format(new Date(msg.createdAt), "MMM d, yyyy · h:mm a")}</span>
											</div>

											<div className="text-[13px] text-zinc-400 line-clamp-2 group-hover:text-zinc-300 leading-relaxed">
												{msg.content}
												{!msg.content && msg.attachments?.length > 0 && (
													<span className="italic flex items-center gap-1 text-indigo-400">
														<FileIcon className="w-3 h-3" />
														{msg.attachments.length} Attachment{msg.attachments.length > 1 ? "s" : ""}
													</span>
												)}
											</div>
										</div>
									</button>
								))}
							</div>
						)}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
