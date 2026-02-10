"use client";

import { ServerDetails } from "@/schemas/server";
import { MemberRole } from "@/generated/prisma/enums";
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";

interface ServerHeaderProps {
	server: ServerDetails;
	role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
	const { onOpen } = useModal();

	const isAdmin = role === MemberRole.ADMIN;
	const isModerator = isAdmin || role === MemberRole.MODERATOR;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<span className="w-full h-12 font-semibold px-4 flex items-center justify-between border-b border-white/5 hover:bg-white/5 transition-colors group focus:outline-none">
					<span className="truncate text-white text-sm font-bold">{server.name}</span>
					<ChevronDown className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300 transition-transform duration-200 group-data-[state=open]:rotate-180" />
				</span>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px] bg-[#141417] border-white/10 shadow-2xl backdrop-blur-xl">
				{/* INVITE: Everyone can see this */}
				<DropdownMenuItem
					onClick={() => onOpen("invite", { server })}
					className="text-indigo-400 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer hover:bg-indigo-500/10 focus:bg-indigo-500/10"
				>
					Invite People
					<UserPlus className="h-4 w-4 ml-auto" />
				</DropdownMenuItem>

				{/* ADMIN ONLY ACTIONS */}
				{isAdmin && (
					<DropdownMenuItem onClick={() => onOpen("editServer", { server })} className="px-3 py-2 text-sm cursor-pointer hover:bg-white/5 focus:bg-white/5 text-zinc-400 hover:text-white">
						Server Settings
						<Settings className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{isAdmin && (
					<DropdownMenuItem onClick={() => onOpen("members", { server })} className="px-3 py-2 text-sm cursor-pointer hover:bg-white/5 focus:bg-white/5 text-zinc-400 hover:text-white">
						Manage Members
						<Users className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{isModerator && (
					<DropdownMenuItem onClick={() => onOpen("createChannel", { server })} className="px-3 py-2 text-sm cursor-pointer hover:bg-white/5 focus:bg-white/5 text-zinc-400 hover:text-white">
						Create Channel
						<PlusCircle className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{isModerator && <DropdownMenuSeparator className="bg-white/5 my-1" />}

				{/* DESTRUCTIVE ACTIONS */}
				{isAdmin && (
					<DropdownMenuItem onClick={() => onOpen("deleteServer", { server })} className="text-rose-500 px-3 py-2 text-sm cursor-pointer hover:bg-rose-500/10 focus:bg-rose-500/10">
						Delete Server
						<Trash className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}

				{!isAdmin && (
					<DropdownMenuItem onClick={() => onOpen("leaveServer", { server })} className="text-rose-500 px-3 py-2 text-sm cursor-pointer hover:bg-rose-500/10 focus:bg-rose-500/10">
						Leave Server
						<LogOut className="h-4 w-4 ml-auto" />
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
