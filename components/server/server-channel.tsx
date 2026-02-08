"use client";

import { ChannelBase } from "@/schemas/channel";
import { cn } from "@/lib/utils";
import { Hash, Lock, Mic, Video } from "lucide-react";
import { ServerBase } from "@/schemas/server";
import { useRouter } from "next/navigation";
import { ModalType } from "@/hooks/use-modal-store";

interface ServerChannelProps {
	channel: ChannelBase;
	server: ServerBase; // We need this to build the URL
	isActive?: boolean;
	role?: string; // For permission checks later
}

const iconMap = {
	TEXT: Hash,
	AUDIO: Mic,
	VIDEO: Video,
};

export const ServerChannel = ({ channel, server, isActive, role }: ServerChannelProps) => {
	const router = useRouter();
	const Icon = iconMap[channel.type];

	const onClick = () => {
		router.push(`/servers/${server.id}/channels/${channel.id}`);
	};

	// Prevent bubbling if we add edit buttons later
	const onAction = (e: React.MouseEvent, action: ModalType) => {
		e.stopPropagation();
		// onOpen(action, { channel, server });
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

			<p className={cn("line-clamp-1 font-medium text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors", isActive && "text-white")}>{channel.name}</p>

			{/* Lock icon for "general" channel usually, or strictly private channels */}
			{channel.name === "general" && <Lock className="ml-auto w-3 h-3 text-zinc-600" />}
		</button>
	);
};
