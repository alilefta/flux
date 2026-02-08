"use client";

import { Plus, Zap } from "lucide-react";
import { NavigationItem } from "./navigation-item";
import { NavigationAction } from "./navigation-action"; // See below
import { ServerBase, ServerDetails } from "@/schemas/server";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

interface NavigationSidebarProps {
	servers: ServerBase[];
	activeServerId?: string;
}

export const NavigationSidebar = ({ servers, activeServerId }: NavigationSidebarProps) => {
	return (
		<nav className="space-y-4 flex flex-col items-center h-full w-[72px] bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl py-3 shadow-2xl flex-shrink-0">
			{/* 1. Flux Home Button */}
			<NavigationAction
				label="Flux Home"
				icon={<Zap className="w-5 h-5 text-white fill-white" />}
				isActive={false} // Would be true if at /home
			/>

			<Separator className="h-[2px] w-10 bg-white/5 rounded-full mx-auto" />

			{/* 2. Server List */}
			<ScrollArea className="flex-1 w-full">
				<div className="flex flex-col gap-y-4 items-center pb-4">
					{servers.map((server) => (
						<NavigationItem key={server.id} id={server.id} name={server.name} imageUrl={server.imageUrl} isActive={activeServerId === server.id} />
					))}
				</div>
			</ScrollArea>

			<div className="h-[2px] w-10 bg-white/5 rounded-full my-3" />

			{/* 3. Add Server Action */}
			<NavigationAction label="Create a Server" icon={<Plus className="w-5 h-5 text-green-500 transition-colors group-hover:text-white" />} />
		</nav>
	);
};
