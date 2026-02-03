"use client";

import { Channel } from "@/schemas/channel";
import { cn } from "@/lib/utils";
import { Hash, Mic, Video } from "lucide-react";

interface ServerChannelProps {
	channel: Channel;
	isActive?: boolean;
	onClick?: () => void;
}

const iconMap = {
	TEXT: Hash,
	AUDIO: Mic,
	VIDEO: Video,
};

export const ServerChannel = ({ channel, isActive, onClick }: ServerChannelProps) => {
	const Icon = iconMap[channel.type];

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
		</button>
	);
};
