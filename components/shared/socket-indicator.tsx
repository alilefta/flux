"use client";

import { useEffect, useState } from "react";
import { pusherClient } from "@/lib/pusher-client";
import { Wifi, WifiOff } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const SocketIndicator = () => {
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		// Initial State
		if (pusherClient.connection.state === "connected") {
			setIsConnected(true);
		}

		// Bind events
		pusherClient.connection.bind("connected", () => setIsConnected(true));
		pusherClient.connection.bind("disconnected", () => setIsConnected(false));
		pusherClient.connection.bind("failed", () => setIsConnected(false));

		return () => {
			pusherClient.connection.unbind_all();
		};
	}, []);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<div
						className={cn(
							"flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500",
							isConnected ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500",
						)}
					>
						{isConnected ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
					</div>
				</TooltipTrigger>
				<TooltipContent className="bg-black border-white/10 text-xs text-zinc-500">{isConnected ? "Real-time: Connected" : "Real-time: Reconnecting..."}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
