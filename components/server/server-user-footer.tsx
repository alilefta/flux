"use client";

import { Mic, MicOff, Headphones, HeadphoneOff, Settings, LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useModal } from "@/hooks/use-modal-store";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { UserAvatar } from "../user/user-avatar";
import { MemberProfile } from "@/schemas/member";
import { useUser } from "@clerk/nextjs";

interface ServerUserFooterProps {
	currentMember: MemberProfile;
}

export const ServerUserFooter = ({ currentMember }: ServerUserFooterProps) => {
	const { user, isLoaded } = useUser(); // 1. Fetch real user
	const onOpen = useModal((state) => state.onOpen);
	const [isMuted, setIsMuted] = useState(false);
	const [isDeafened, setIsDeafened] = useState(false);
	const isMounted = useIsMounted();

	// ✅ Combine checks:
	// 1. If not mounted yet (Server-side or first client render) -> Render Skeleton
	// 2. If Clerk not loaded -> Render Skeleton
	if (!isMounted || !isLoaded || !user) {
		return (
			<div className="h-14 bg-black/20 px-3 flex items-center gap-x-2 border-t border-white/5 mt-auto animate-pulse">
				{/* Optional: Add inner skeleton shapes to make it look nicer */}
				<div className="h-8 w-8 rounded-full bg-white/10" />
				<div className="flex-1 space-y-1">
					<div className="h-3 w-20 bg-white/10 rounded" />
					<div className="h-2 w-12 bg-white/10 rounded" />
				</div>
			</div>
		);
	}
	return (
		<div className="h-14 bg-black/20 px-3 flex items-center justify-between border-t border-white/5 mt-auto">
			{/* 1. Clerk User Button & Info */}
			{/* <div className="flex items-center gap-x-3 hover:bg-white/5 p-1 rounded-md transition-colors">
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
			</div> */}
			{/* ✅ CUSTOM USER BUTTON */}
			<div
				onClick={() =>
					onOpen("userSettings", {
						// We pass the prisma profile to the settings modal
						profile: currentMember.profile,
					})
				}
				className="flex items-center gap-x-2 hover:bg-white/5 p-1.5 rounded-md transition-colors cursor-pointer group max-w-30"
			>
				<UserAvatar src={currentMember.profile.imageUrl ?? undefined} className="h-8 w-8 border border-white/10" />

				<div className="flex flex-col min-w-0">
					<span className="text-[13px] font-semibold text-white truncate group-hover:text-zinc-200 transition">{currentMember.profile.name}</span>
					<span className="text-[10px] text-zinc-400 truncate">Online</span>
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
					onClick={() =>
						onOpen("userSettings", {
							// Construct a mock profile object from Clerk data
							// OR pass the real Prisma profile down as a prop
							profile: currentMember.profile,
						})
					}
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
