"use client";

import { useParams, useRouter } from "next/navigation";
import { UserAvatar } from "@/components/user/user-avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react"; // Icon for "Friends" view
import { ProfileBase } from "@/schemas/profile";

interface ConversationSidebarProps {
	conversations: {
		id: string;
		memberOne: ProfileBase;
		memberTwo: ProfileBase;
	}[];
	currentProfileId: string;
}

export const ConversationSidebar = ({ conversations, currentProfileId }: ConversationSidebarProps) => {
	const params = useParams();
	const router = useRouter();

	const onClick = (id: string) => {
		router.push(`/conversations/${id}`);
	};

	return (
		<div className="flex flex-col h-full w-64 bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden flex-shrink-0">
			{/* Header */}
			<div className="h-12 flex items-center px-4 border-b border-white/5 bg-white/2">
				<button
					className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition"
					onClick={() => router.push("/conversations")} // Go to DM Home
				>
					<Users className="w-4 h-4" />
					<span className="font-bold text-sm">Friends</span>
				</button>
			</div>

			{/* DM List */}
			<ScrollArea className="flex-1">
				<div className="p-3 space-y-1">
					<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 pl-2">Direct Messages</p>

					{conversations.map((conversation) => {
						// Logic to find "The Other Person"
						const otherMember = conversation.memberOne.id === currentProfileId ? conversation.memberTwo : conversation.memberOne;

						const isActive = params?.conversationId === conversation.id;

						return (
							<button
								key={conversation.id}
								onClick={() => onClick(conversation.id)}
								className={cn(
									"group flex items-center gap-x-3 w-full p-2 rounded-xl transition-all mb-1",
									isActive ? "bg-indigo-500/10 text-zinc-200" : "text-zinc-400 hover:bg-white/5 hover:text-zinc-300",
								)}
							>
								<UserAvatar src={otherMember.imageUrl ?? undefined} className="h-8 w-8" />
								<div className="flex flex-col items-start overflow-hidden">
									<span className={cn("text-sm font-semibold truncate w-full max-w-35", isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-300")}>
										{otherMember.name}
									</span>
								</div>
							</button>
						);
					})}
				</div>
			</ScrollArea>
		</div>
	);
};
