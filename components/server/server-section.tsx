"use client";

import { ChannelType, MemberRole } from "@/generated/prisma/enums";
import { ServerBase } from "@/schemas/server.base";
import { Plus, Settings } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store"; // Assuming you have this
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ServerSectionProps {
	label: string;
	role?: MemberRole;
	sectionType: "channels" | "members";
	channelType?: ChannelType;
	server?: ServerBase;
}

export const ServerSection = ({ label, role, sectionType, channelType, server }: ServerSectionProps) => {
	const onOpen = useModal((state) => state.onOpen);

	return (
		<div className="flex items-center justify-between py-2 px-2 group">
			<p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-bold group-hover:text-zinc-400 transition-colors">{label}</p>

			{/* Action: Create Channel */}
			{role !== MemberRole.GUEST && sectionType === "channels" && (
				<TooltipProvider delayDuration={50}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button
								title="Create Channel"
								onClick={() => onOpen("createChannel", { channelType })}
								className="text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
							>
								<Plus className="h-3 w-3" />
							</button>
						</TooltipTrigger>
						<TooltipContent side="top" className="bg-black text-white border-white/10 text-xs">
							<p>Create Channel</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)}

			{/* Action: Manage Members */}
			{role === MemberRole.ADMIN && sectionType === "members" && (
				<TooltipProvider delayDuration={50}>
					<Tooltip>
						<TooltipTrigger asChild>
							<button title="Show Members" onClick={() => onOpen("members", { server })} className="text-zinc-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
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
