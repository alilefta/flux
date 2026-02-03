"use client";

import { Server } from "@/schemas/server";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ServerHeader } from "./server-header";
import { ServerSection } from "./server-section"; // You'll create this similar to Channel but for headers
import { ServerChannel } from "./server-channel";
import { ServerUserFooter } from "@/components/server/server-user-footer";
import { currentProfile } from "@/lib/dummy-data";

interface ServerSidebarProps {
	server: Server;
	activeChannelId?: string;
}

export const ServerSidebar = ({ server, activeChannelId }: ServerSidebarProps) => {
	// Logic to separate channels by type if needed, or by category
	// For this design, we assume categories are passed in the server object

	return (
		<div className="flex flex-col h-full w-64 bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl overflow-hidden">
			<ServerHeader server={server} />

			<ScrollArea className="flex-1 px-3">
				<div className="mt-2">
					{server.categories?.map((category) => (
						<div key={category.id} className="mb-4">
							{/* Reusable Section Header */}
							<h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2 px-2 flex items-center justify-between group">{category.name}</h4>

							<div className="space-y-0.5">
								{category.channels.map((channel) => (
									<ServerChannel key={channel.id} channel={channel} isActive={channel.id === activeChannelId} />
								))}
							</div>
						</div>
					))}
				</div>
			</ScrollArea>

			<ServerUserFooter />
		</div>
	);
};
