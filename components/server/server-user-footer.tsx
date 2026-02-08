"use client";

import { Mic, MicOff, Headphones, HeadphoneOff, Settings, LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import { ProfileBase } from "@/schemas/profile";

interface ServerUserFooterProps {
	profile: ProfileBase;
}

export const ServerUserFooter = () => {
	const { user, isLoaded } = useUser(); // 1. Fetch real user

	const [isMuted, setIsMuted] = useState(false);
	const [isDeafened, setIsDeafened] = useState(false);

	if (!isLoaded || !user) {
		// Loading skeleton
		return <div className="h-14 bg-black/20 px-3 flex items-center gap-x-2 border-t border-white/5 mt-auto animate-pulse" />;
	}

	return (
		<div className="h-14 bg-black/20 px-3 flex items-center justify-between border-t border-white/5 mt-auto">
			{/* 1. Clerk User Button & Info */}
			<div className="flex items-center gap-x-3 hover:bg-white/5 p-1 rounded-md transition-colors">
				{/* We use Clerk's button but style it to fit */}
				<div className="relative h-8 w-8">
					<UserButton
						appearance={{
							elements: {
								avatarBox: "h-8 w-8 border border-white/10",
							},
						}}
					/>
				</div>

				<div className="flex flex-col max-w-20">
					<span className="text-xs font-semibold text-white truncate">{user.username || user.firstName || "User"}</span>
					<span className="text-[10px] text-zinc-400 truncate font-mono">Online</span>
				</div>
			</div>

			{/* 2. Controls */}
			<div className="flex items-center gap-0.5">
				<ActionIcon active={isMuted} icon={isMuted ? MicOff : Mic} tooltip={isMuted ? "Unmute" : "Mute"} onClick={() => setIsMuted(!isMuted)} danger={isMuted} />
				<ActionIcon
					active={isDeafened}
					icon={isDeafened ? HeadphoneOff : Headphones}
					tooltip={isDeafened ? "Undeafen" : "Deafen"}
					onClick={() => setIsDeafened(!isDeafened)}
					danger={isDeafened}
				/>
				{/* Settings Button */}
				<ActionIcon
					icon={Settings}
					tooltip="User Settings"
					onClick={() => {}} // Hook this to Clerk's openUserProfile() later
				/>
			</div>
		</div>
	);
};

// Sub-component for the buttons to keep things clean
function ActionIcon({ icon: Icon, tooltip, active, danger, onClick }: { icon: LucideIcon; tooltip: string; active?: boolean; danger?: boolean; onClick: () => void }) {
	return (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						title="Action Button"
						onClick={onClick}
						className={cn(
							"flex items-center justify-center h-8 w-8 rounded-lg transition-all",
							active ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white",
							danger && "text-red-400 hover:text-red-300 hover:bg-red-400/10",
						)}
					>
						<Icon className="h-4 w-4" />
					</button>
				</TooltipTrigger>
				<TooltipContent side="top" className="bg-black text-white border-white/10 text-xs">
					<p>{tooltip}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
