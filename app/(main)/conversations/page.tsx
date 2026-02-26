import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { getConversations } from "@/data/conversation";
import { Users, MessageSquarePlus, Search } from "lucide-react";
import { UserAvatar } from "@/components/user/user-avatar";
import Link from "next/link";
import { format } from "date-fns";

export default async function ConversationsPage() {
	const profile = await getCurrentProfile();

	if (!profile) return redirect("/sign-in");

	// Fetch recent conversations to show a "Quick Access" grid
	const conversations = await getConversations(profile.id);

	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl h-full overflow-hidden flex flex-col w-full relative z-0">
			{/* 1. Header */}
			<div className="h-12 px-6 flex items-center border-b border-white/5 bg-white/2">
				<Users className="w-5 h-5 text-zinc-400 mr-2" />
				<span className="font-bold text-white text-sm">Friends</span>

				{/* Decorative Divider */}
				<div className="h-4 w-px bg-white/10 mx-4" />

				<div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
					<span className="text-zinc-100 bg-white/5 px-2 py-0.5 rounded hover:bg-white/10 cursor-pointer transition">All</span>
					<span className="hover:text-zinc-300 cursor-pointer transition">Online</span>
					<span className="hover:text-zinc-300 cursor-pointer transition">Pending</span>
					<span className="hover:text-zinc-300 cursor-pointer transition">Blocked</span>
				</div>
			</div>

			{/* 2. Main Content */}
			<div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
				{/* If no conversations, show Empty State */}
				{conversations.length === 0 ? (
					<div className="h-full flex flex-col items-center justify-center text-center space-y-4">
						<div className="w-20 h-20 bg-zinc-900/50 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner transform rotate-3">
							<MessageSquarePlus className="w-10 h-10 text-indigo-500" />
						</div>
						<div>
							<h2 className="text-xl font-bold text-white">No conversations yet</h2>
							<p className="text-zinc-400 text-sm mt-1 max-w-xs mx-auto">You haven&apos;t started any chats. Find a friend or check your servers to start talking.</p>
						</div>
					</div>
				) : (
					// If has conversations, show Quick Access Grid
					<div className="space-y-6">
						{/* Search Placeholder */}
						<div className="relative">
							<Search className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
							<input
								disabled
								placeholder="Search for a conversation..."
								className="w-full bg-black/20 border border-white/10 rounded-xl py-2.5 pl-10 text-sm text-zinc-400 focus:outline-none cursor-not-allowed"
							/>
						</div>

						<div>
							<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Recent Conversations</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
								{conversations.map((conv) => {
									const otherProfile = conv.memberOne.id === profile.id ? conv.memberTwo : conv.memberOne;

									return (
										<Link
											key={conv.id}
											href={`/conversations/${conv.id}`}
											className="group p-4 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all flex items-center gap-4"
										>
											<div className="relative">
												<UserAvatar src={otherProfile.imageUrl ?? undefined} className="h-12 w-12" />
												<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-[3px] border-[#1e1e22] rounded-full" />
											</div>

											<div className="flex-1 min-w-0">
												<div className="flex items-center justify-between">
													<span className="font-bold text-zinc-200 group-hover:text-white truncate">{otherProfile.name}</span>
												</div>
												<p className="text-xs text-zinc-500 mt-0.5 font-mono">{format(new Date(conv.updatedAt), "MMM d, h:mm a")}</p>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
