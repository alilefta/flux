"use client";

import { ServerBase } from "@/schemas/server";
import { Settings, ChevronDown } from "lucide-react";

interface ServerHeaderProps {
	server: ServerBase;
	role?: string;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
	return (
		<button className="w-full h-12 px-4 flex items-center justify-between border-b border-white/5 hover:bg-white/5 transition-colors group">
			<span className="font-semibold text-sm truncate text-white">{server.name}</span>
			{role && <span className="font-semibold text-sm truncate text-white">{role}</span>}
			<Settings className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
		</button>
	);
};
