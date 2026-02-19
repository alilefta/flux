"use client";

import { useEffect, useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import { Search, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { searchMessagesAction } from "@/actions/message"; // You need to create this action
import { useAction } from "next-safe-action/hooks";
import { format } from "date-fns";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user/user-avatar";
import { handleSafeActionError } from "@/lib/safe-action-helpers";

export const ChatSearchModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);

	const isModalOpen = isOpen && type === "searchMessages";
	const { channelId } = data.query || {};
	const [searchTerm, setSearchTerm] = useState("");
	const [debouncedTerm, setDebouncedTerm] = useState("");

	// Debounce logic
	useEffect(() => {
		const timer = setTimeout(() => setDebouncedTerm(searchTerm), 500);
		return () => clearTimeout(timer);
	}, [searchTerm]);

	const { executeAsync: searchMessages } = useAction(searchMessagesAction, {
		onSuccess: () => {},
		onError: ({ error }) => {
			handleSafeActionError<typeof searchMessagesAction>(error);
		},
	});

	const { data: results, isLoading } = useQuery({
		queryKey: ["search", channelId, debouncedTerm],
		queryFn: async () => {
			if (!debouncedTerm) return [];
			const res = await searchMessages({ channelId: channelId as string, query: debouncedTerm });
			return res?.data?.messages || [];
		},
		enabled: !!debouncedTerm && isModalOpen,
	});

	const onJump = (messageId: string) => {
		onClose();
		// We assume the parent page passed a callback or we use a global event/store
		// For now, let's dispatch a custom event that ChatMessages listens to
		window.dispatchEvent(new CustomEvent("jump-to-message", { detail: { messageId } }));
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogHeader className="sr-only">
				<DialogTitle>Chat Search</DialogTitle>
				<DialogDescription>Chat Search</DialogDescription>
			</DialogHeader>
			<DialogContent className="bg-[#141417]/95 border border-white/10 p-0 shadow-2xl sm:max-w-lg gap-0 rounded-2xl overflow-hidden">
				{/* Header Search Input */}
				<div className="flex items-center px-4 py-4 border-b border-white/5 bg-zinc-900/50">
					<Search className="w-5 h-5 text-zinc-500 mr-3" />
					<Input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search messages..."
						className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-zinc-600 px-0 h-auto"
						autoFocus
					/>
					{isLoading && <Loader2 className="w-4 h-4 animate-spin text-zinc-500 ml-auto" />}
				</div>

				<ScrollArea className="max-h-100 min-h-25">
					{results?.length === 0 && debouncedTerm && !isLoading && <div className="p-8 text-center text-zinc-500 text-sm">No messages found matching &quot;{debouncedTerm}&quot;</div>}

					<div className="p-2 space-y-1">
						{results?.map((msg) => (
							<button key={msg.id} onClick={() => onJump(msg.id)} className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition group flex gap-3">
								<UserAvatar src={msg.member.profile.imageUrl ?? undefined} className="h-8 w-8 mt-1" />
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-2 mb-0.5">
										<span className="font-bold text-zinc-300 text-sm">{msg.member.profile.name}</span>
										<span className="text-[10px] text-zinc-600">{format(new Date(msg.createdAt), "MMM d, yyyy")}</span>
									</div>
									<p className="text-sm text-zinc-400 truncate group-hover:text-zinc-200">{msg.content}</p>
								</div>
							</button>
						))}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
