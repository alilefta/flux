import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { getConversations } from "@/data/conversation";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ConversationSidebar } from "@/components/conversation/conversation-sidebar";
import { getServersByProfileId } from "@/data/server";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	// 1. Get Global Conversations for the Sidebar
	const conversations = await getConversations(profile.id);

	// 2. Get Servers for the Navigation Rail (Leftmost)
	const servers = await getServersByProfileId(profile.id);

	return (
		<div className="h-screen w-full flex gap-3 py-4 px-2 bg-background overflow-hidden relative">
			{/* Zone A: Navigation Rail (Always present) */}
			<div className="shrink-0 z-20">
				<NavigationSidebar
					servers={servers}
					// activeServerId is undefined here because we are in DM mode
				/>
			</div>

			{/* Zone B: DM Sidebar */}
			<div className="shrink-0 z-10 h-full">
				<ConversationSidebar conversations={conversations} currentProfileId={profile.id} />
			</div>

			{/* Zone C: Content */}
			<main className="flex-1 h-full min-w-0 overflow-hidden">{children}</main>
		</div>
	);
}
