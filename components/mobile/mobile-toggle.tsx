import { ChevronLeft, Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";
import { ConversationSidebar } from "@/components/conversation/conversation-sidebar";
import { getCurrentProfile } from "@/data/profile";
import { getServersByProfileId, getServerWithDetails } from "@/data/server";
import { getConversations } from "@/data/conversation";
import { getCurrentMemberByServerAndProfileId } from "@/data/member";

interface MobileToggleProps {
	serverId?: string; // If present, we show Server Sidebar
}

export const MobileToggle = async ({ serverId }: MobileToggleProps) => {
	const profile = await getCurrentProfile();

	if (!profile) return null;

	// 1. Fetch Global Navigation Data (Servers list)
	const servers = await getServersByProfileId(profile.id);

	// 2. Determine which Context Sidebar to show
	let contextSidebar = null;

	if (serverId) {
		// A. Server Mode
		const server = await getServerWithDetails(serverId, profile.id);
		// const member = await prisma.member.findFirst({
		//     where: { serverId, profileId: profile.id },
		// });

		const member = await getCurrentMemberByServerAndProfileId(serverId, profile.id);
		if (server && member) {
			contextSidebar = (
				<ServerSidebar
					server={server}
					// activeChannelId is handled dynamically inside the component now via params
					role={member.role}
					currentMember={member}
				/>
			);
		}
	} else {
		// B. Conversation Mode
		const conversations = await getConversations(profile.id);
		contextSidebar = <ConversationSidebar conversations={conversations} currentProfileId={profile.id} />;
	}

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden text-zinc-400 hover:text-white">
					<Menu className="w-5 h-5" />
				</Button>
			</SheetTrigger>
			<SheetContent showCloseButton={false} side="left" className="p-0 gap-0 w-84 bg-[#1e1e22] border-none">
				<SheetHeader className="sr-only">
					<SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
					<SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
				</SheetHeader>
				<div className="flex w-full gap-0 flex-1 relative">
					<SheetClose className="absolute z-0 top-2 -right-4.5 bg-[#1e1e22] p-2 rounded-full">
						<ChevronLeft className="w-4 h-4" />
					</SheetClose>
					{/* Navigation Rail (Always Visible) */}
					<div className="w-18">
						<NavigationSidebar currentProfileId={profile.id} servers={servers} activeServerId={serverId} />
					</div>

					{/* Context Sidebar (Server or DM) */}
					<div className="flex-1">{contextSidebar}</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};
