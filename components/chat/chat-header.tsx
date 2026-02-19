"use client";

import { Hash, Menu, Search, Settings, Trash, Edit, Wifi, User } from "lucide-react";
import { UserAvatar } from "@/components/user/user-avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";
import { MemberProfile } from "@/schemas/member";
import { ChannelBase } from "@/schemas/channel";
import { ServerBase } from "@/schemas/server.base";
import { MemberRole } from "@/generated/prisma/enums";

type StreamType = "channel" | "conversation";

interface ChatHeaderProps {
	serverId: string;
	imageUrl?: string;
	channel: ChannelBase;
	member: MemberProfile;
	type?: StreamType;
}

export const ChatHeader = ({ serverId, imageUrl, channel, member, type = "channel" }: ChatHeaderProps) => {
	const onOpen = useModal((state) => state.onOpen);
	const { name, id: channelId } = channel;

	const { role, profile } = member;

	const isAdmin = role === MemberRole.ADMIN;
	const isModerator = role === MemberRole.MODERATOR;
	const isGeneral = name === "general";
	const canManageChannel = (isAdmin || isModerator) && !isGeneral;

	return (
		<div className="text-md font-semibold px-4 flex items-center h-12 border-b border-white/5 bg-white/2 shrink-0 backdrop-blur-sm z-10">
			{/* 1. Mobile Toggle */}
			<button title="Show menu" className="md:hidden mr-2 text-zinc-400 hover:text-white transition-colors">
				<Menu className="w-5 h-5" />
			</button>

			{/* 2. Channel Info */}
			<div className="flex items-center gap-x-2 mr-auto">
				{type === "channel" && <Hash className="w-5 h-5 text-zinc-400" />}
				{type === "conversation" && <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />}

				<div className="flex flex-col">
					<p className="font-bold text-white text-sm leading-tight flex items-center gap-2">
						{name}
						{/* Optional: Add a subtle indicator if it's the general channel */}
						{isGeneral && type === "channel" && <span className="text-[10px] bg-white/5 px-1.5 rounded text-zinc-500 font-mono font-normal">default</span>}
					</p>
					{type === "channel" && <span className="text-[10px] text-zinc-500 font-normal hidden md:block">Topic: Building the future of collaboration</span>}
				</div>
			</div>

			{/* 3. Actions Area */}
			<div className="flex items-center gap-x-3">
				{/* Connection Status */}
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500 cursor-help">
								<Wifi className="w-3 h-3" />
							</div>
						</TooltipTrigger>
						<TooltipContent className="bg-black border-white/10 text-xs text-zinc-500">Real-time connection: Stable</TooltipContent>
					</Tooltip>
				</TooltipProvider>

				{/* Search Bar */}
				<div
					className="hidden md:flex items-center gap-2 bg-black/20 px-2 py-1.5 rounded-md border border-white/5 text-zinc-500 text-xs hover:border-white/10 transition-colors cursor-text w-40 lg:w-56"
					onClick={() => onOpen("searchMessages", { query: { channelId } })}
				>
					<Search className="w-3.5 h-3.5" />
					<span className="truncate">Search...</span>
					<kbd className="ml-auto pointer-events-none inline-flex h-4 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
						<span className="text-xs">⌘</span>F
					</kbd>
				</div>

				{/* ✅ CHANNEL SETTINGS DROPDOWN */}
				{type === "channel" && canManageChannel && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none" title="Channel Settings">
								<Settings className="w-5 h-5" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="bg-[#1e1e22] border-white/10 text-zinc-300 w-48 shadow-xl backdrop-blur-xl">
							{/* EDIT ACTION */}
							<DropdownMenuItem
								onClick={() =>
									onOpen("editChannel", {
										channel: { id: channelId, name, type: "TEXT" } as ChannelBase, // Mock object for modal
										server: { id: serverId } as ServerBase,
									})
								}
								className="cursor-pointer hover:bg-white/5 focus:bg-white/5 focus:text-white"
							>
								<Edit className="w-4 h-4 mr-2 text-indigo-400" />
								Edit Channel
							</DropdownMenuItem>

							{/* DELETE ACTION (Hide for General) */}
							{!isGeneral && (
								<>
									<DropdownMenuSeparator className="bg-white/10" />
									<DropdownMenuItem
										onClick={() =>
											onOpen("deleteChannel", {
												channel: { id: channelId, name, type: "TEXT" } as ChannelBase,
												server: { id: serverId } as ServerBase,
											})
										}
										className="text-rose-500 hover:bg-rose-500/10 cursor-pointer focus:bg-rose-500/10 focus:text-rose-400"
									>
										<Trash className="w-4 h-4 mr-2" />
										Delete Channel
									</DropdownMenuItem>
								</>
							)}
						</DropdownMenuContent>
					</DropdownMenu>
				)}

				{/* User Profile / Settings */}
				<button
					title="User Settings"
					onClick={() =>
						onOpen("userSettings", {
							// Construct a mock profile object from Clerk data
							// OR pass the real Prisma profile down as a prop
							profile: {
								id: profile.id, // We need the Real Profile ID for the update action
								name: profile.name,
								imageUrl: profile.imageUrl,
								email: profile.email,
							},
						})
					}
					className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
				>
					<User className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};
