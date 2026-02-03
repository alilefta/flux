"use client";

import { Channel } from "@/schemas/channel";
import { Server } from "@/schemas/server";
import { Plus, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ServerSectionProps {
	label: string;
	role?: "ADMIN" | "GUEST"; // Simulating permissions
	sectionType: "channels" | "members";
	channelType?: Channel["type"];
	server?: Server; // strict typing: Server
}

export const ServerSection = ({ label, role, sectionType, channelType, server }: ServerSectionProps) => {
	return (
		<div className="flex items-center justify-between py-2 px-2 group">
			<p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold group-hover:text-zinc-400 transition-colors">{label}</p>

			{role !== "GUEST" && sectionType === "channels" && (
				<TooltipProvider delayDuration={50}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button onClick={() => console.log(`Create ${channelType} channel`)} className="text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
								<Plus className="h-3 w-3" />
							</button>
						</TooltipTrigger>
						<TooltipContent side="top" className="bg-black text-white border-white/10 text-xs">
							<p>Create Channel</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}

			{role === "ADMIN" && sectionType === "members" && (
				<TooltipProvider delayDuration={50}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button title="Settings" className="text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
								<Settings className="h-3 w-3" />
							</button>
						</TooltipTrigger>
						<TooltipContent side="top" className="bg-black text-white border-white/10 text-xs">
							<p>Manage Members</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}
		</div>
	);
};
