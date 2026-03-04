"use client";

import { MessageCircle, Plus, Zap } from "lucide-react";
import { NavigationItem } from "./navigation-item";
import { NavigationAction } from "./navigation-action"; // See below
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { ServerBase } from "@/schemas/server.base";
import { useModal } from "@/hooks/use-modal-store";
import { usePathname, useRouter } from "next/navigation";
import { useNotificationStore } from "@/hooks/use-notification-store";
import { NavigationNotifications } from "./navigation-notifications";

interface NavigationSidebarProps {
	servers: ServerBase[];
	activeServerId?: string;
	profileId: string;
}

export const NavigationSidebar = ({ servers, activeServerId, profileId }: NavigationSidebarProps) => {
	const onOpen = useModal((s) => s.onOpen);
	const router = useRouter();

	const pathname = usePathname(); // ✅ Track current path
	// Access store
	const unreadDMs = useNotificationStore((state) => state.unreadDMs);
	const hasAnyUnread = Object.keys(unreadDMs).length > 0;
	const isDMSection = pathname?.includes("/conversations");

	return (
		<nav className="space-y-4 flex flex-col items-center h-full w-18 bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl py-3 shadow-2xl flex-shrink-0">
			<NavigationNotifications profileId={profileId} />

			<NavigationAction
				label="Flux Home"
				icon={<Zap className="w-5 h-5 text-white fill-white" />}
				isActive={false} // Would be true if at /home
			/>

			<Separator className="h-0.5 w-10 bg-white/5 rounded-full mx-auto" />

			{/* 2. Server List */}
			<ScrollArea className="flex-1 w-full">
				<div className="flex flex-col gap-y-4 items-center pb-4">
					{servers.map((server) => (
						<NavigationItem
							onClick={() => router.push(`/servers/${server.id}`)}
							key={server.id}
							id={server.id}
							name={server.name}
							imageUrl={server.imageUrl}
							isActive={activeServerId === server.id}
						/>
					))}
				</div>
			</ScrollArea>

			<div className="h-0.5 w-10 bg-white/5 rounded-full my-3" />

			{/* 4. Direct Messages Button (The Hub) */}
			<div className="relative">
				<NavigationAction
					label="Direct Messages"
					icon={<MessageCircle className="w-5 h-5 text-green-500 transition-colors group-hover:text-white" />}
					onClick={() => router.push("/conversations")} // ✅ Navigate to DM Dashboard
					isActive={isDMSection} // ✅ Highlight if we are in DMs
				/>
				{/* The Badge */}
				{hasAnyUnread && <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#1e1e22] animate-pulse pointer-events-none" />}
			</div>

			{/* 5. Add Server Action */}
			<NavigationAction label="Create a Server" onClick={() => onOpen("createServer")} icon={<Plus className="w-5 h-5 text-green-500 transition-colors group-hover:text-white" />} />
		</nav>
	);
};
