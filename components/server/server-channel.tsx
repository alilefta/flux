"use client";

import { ChannelBase } from "@/schemas/channel";
import { ServerBase } from "@/schemas/server.base";
import { MemberRole } from "@/generated/prisma/enums";
import { cn } from "@/lib/utils";
import { Hash, Mic, Video, Lock, Edit, Trash, Megaphone } from "lucide-react";
import { useRouter } from "next/navigation";
import { ModalType, useModal } from "@/hooks/use-modal-store";
import { ActionTooltip } from "@/components/custom-ui/tooltip/action-tooltip"; // Assuming you have this helper or reuse the tooltips

interface ServerChannelProps {
	channel: ChannelBase;
	server: ServerBase;
	isActive?: boolean;
	role?: MemberRole;
}

const iconMap = {
	TEXT: Hash,
	AUDIO: Mic,
	VIDEO: Video,
	ANNOUNCEMENT: Megaphone,
};

export const ServerChannel = ({ channel, server, isActive, role }: ServerChannelProps) => {
	const onOpen = useModal((state) => state.onOpen);
	const router = useRouter();
	const Icon = iconMap[channel.type];

	// Logic for showing "General" vs "Restricted"
	const isGeneral = channel.name === "general";
	const isModeratorOrAdmin = role === MemberRole.ADMIN || role === MemberRole.MODERATOR;

	const onClick = () => {
		router.push(`/servers/${server.id}/channels/${channel.id}`);
	};

	const onAction = (e: React.MouseEvent, action: ModalType) => {
		e.stopPropagation(); // Don't trigger navigation
		onOpen(action, { channel, server });
	};

	return (
		<button
			onClick={onClick}
			className={cn(
				"group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-white/5 transition-all mb-1",
				isActive && "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_rgba(99,102,241,0.2)]",
			)}
		>
			<Icon className={cn("shrink-0 w-4 h-4 text-zinc-500", isActive && "text-primary")} />

			<p className={cn("line-clamp-1 font-medium text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors text-left", isActive && "text-white")}>{channel.name}</p>

			{/* ICONS AREA */}
			<div className="ml-auto flex items-center gap-x-2">
				{/* 1. Edit Action (Mods+ and Not General) */}
				{!isGeneral && isModeratorOrAdmin && (
					<ActionTooltip label="Edit">
						<Edit onClick={(e) => onAction(e, "editChannel")} className="hidden group-hover:block w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 transition" />
					</ActionTooltip>
				)}

				{/* 2. Delete Action (Mods+ and Not General) */}
				{!isGeneral && isModeratorOrAdmin && (
					<ActionTooltip label="Delete">
						<Trash onClick={(e) => onAction(e, "deleteChannel")} className="hidden group-hover:block w-3.5 h-3.5 text-zinc-500 hover:text-rose-500 transition" />
					</ActionTooltip>
				)}

				{/* 3. Lock Icon (If General) */}
				{isGeneral && <Lock className="w-3.5 h-3.5 text-zinc-500" />}
			</div>
		</button>
	);
};
