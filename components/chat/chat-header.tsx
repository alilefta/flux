"use client";

import { Hash, Menu, Mic, Search, User, Video, Wifi } from "lucide-react";
import { UserAvatar } from "@/components/user/user-avatar"; // You'll create this simple wrapper later
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatHeaderProps {
	serverId: string;
	name: string;
	type: "channel" | "conversation"; // Conversation = DM
	imageUrl?: string; // For DMs
}

export const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
	return (
		<div className="text-md font-semibold px-4 flex items-center h-12 border-b border-white/5 bg-white/[0.02] shrink-0 backdrop-blur-sm z-10">
			{/* 1. Mobile Toggle (Hidden on Desktop) */}
			<button title="Show menu" className="md:hidden mr-2 text-zinc-400 hover:text-white transition-colors">
				<Menu className="w-5 h-5" />
			</button>

			{/* 2. Channel Icon & Name */}
			<div className="flex items-center gap-x-2 mr-auto">
				{type === "channel" && <Hash className="w-5 h-5 text-zinc-400" />}
				{type === "conversation" && <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />}

				<div className="flex flex-col">
					<p className="font-bold text-white text-sm leading-tight">{name}</p>
					{type === "channel" && <span className="text-[10px] text-zinc-500 font-normal hidden md:block">Topic: Building the future of collaboration</span>}
				</div>
			</div>

			{/* 3. Actions Area */}
			<div className="flex items-center gap-x-4">
				{/* Connection Status (Simulated) */}
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500">
								<Wifi className="w-3 h-3" />
							</div>
						</TooltipTrigger>
						<TooltipContent className="bg-black border-white/10 text-xs text-zinc-500">Real-time connection: Stable</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				{/* Search Bar Visual */}
				<div className="hidden md:flex items-center gap-2 bg-black/20 px-2 py-1.5 rounded-md border border-white/5 text-zinc-500 text-xs hover:border-white/10 transition-colors cursor-text w-40 lg:w-56">
					<Search className="w-3.5 h-3.5" />
					<span className="truncate">Search...</span>
					<kbd className="ml-auto pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
						<span className="text-xs">⌘</span>F
					</kbd>
				</div>

				<button title="User Settings" className="text-zinc-400 hover:text-white transition-colors">
					<User className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};
