"use client";

import { Server } from "@/schemas/server";
import { Plus, Zap } from "lucide-react";
import { NavigationItem } from "./navigation-item";
import { NavigationAction } from "./navigation-action"; // See below

interface NavigationSidebarProps {
	servers: Server[];
	activeServerId?: string;
}

export const NavigationSidebar = ({ servers, activeServerId }: NavigationSidebarProps) => {
	return (
		<nav className="h-full w-[72px] bg-[#141417]/40 backdrop-blur-xl border border-white/5 flex flex-col items-center py-4 rounded-3xl shadow-2xl">
			{/* 1. Flux Home Button */}
			<NavigationAction
				label="Flux Home"
				icon={<Zap className="w-5 h-5 text-white fill-white" />}
				isActive={false} // Would be true if at /home
			/>

			<div className="h-[2px] w-10 bg-white/5 rounded-full my-3" />

			{/* 2. Server List */}
			<div className="flex-1 w-full flex flex-col gap-y-4 items-center overflow-y-auto no-scrollbar">
				{servers.map((server) => (
					<NavigationItem key={server.id} id={server.id} name={server.name} imageUrl={server.imageUrl} isActive={activeServerId === server.id} />
				))}
			</div>

			<div className="h-[2px] w-10 bg-white/5 rounded-full my-3" />

			{/* 3. Add Server Action */}
			<NavigationAction label="Create a Server" icon={<Plus className="w-5 h-5 text-green-500 transition-colors group-hover:text-white" />} />
		</nav>
	);
};
