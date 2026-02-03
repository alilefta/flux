"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface NavigationItemProps {
	id: string;
	imageUrl: string;
	name: string;
	isActive?: boolean;
	onClick?: () => void;
}

export const NavigationItem = ({ id, imageUrl, name, isActive, onClick }: NavigationItemProps) => {
	return (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button onClick={onClick} className="group relative flex items-center justify-center">
						{/* Active Left Pill */}
						<div
							className={cn("absolute left-0 bg-white rounded-r-full transition-all w-[4px]", isActive ? "h-[36px]" : "h-[8px] opacity-0 group-hover:opacity-100 group-hover:h-[20px]")}
						/>

						{/* The Icon Container */}
						<div
							className={cn(
								"relative flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background/50 group-hover:bg-primary/10 border border-white/5 group-hover:border-white/10",
								isActive && "bg-primary/20 text-primary border-primary/20 rounded-[16px]",
							)}
						>
							{imageUrl ? (
								<div className="relative w-full h-full">
									<Image fill src={imageUrl} alt={name} className="object-cover" />
								</div>
							) : (
								// Fallback Initial
								<span className="text-sm font-semibold transition-colors group-hover:text-white text-zinc-400">{name.substring(0, 1).toUpperCase()}</span>
							)}
						</div>
					</button>
				</TooltipTrigger>
				<TooltipContent side="right" align="center" className="bg-black text-white border-white/10">
					<p className="font-semibold text-xs">{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
