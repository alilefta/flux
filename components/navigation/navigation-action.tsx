"use client";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface NavigationActionProps {
	icon: React.ReactNode;
	label: string;
	isActive?: boolean;
	onClick?: () => void;
}

export const NavigationAction = ({ icon, label, isActive, onClick }: NavigationActionProps) => {
	return (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button onClick={onClick} className="group flex items-center justify-center">
						<div
							className={cn(
								"flex mx-3 h-12 w-12 rounded-[24px] group-hover:rounded-3xl transition-all overflow-hidden items-center justify-center bg-background/50 border border-white/5 ",

								// ✅ LOGIC: Only apply Green hover effects if NOT active
								!isActive && "group-hover:bg-green-500/10 group-hover:border-green-500/50",

								// Active State (Purple)
								isActive && "bg-primary rounded-3xl border-primary text-white",
							)}
						>
							{icon}
						</div>
					</button>
				</TooltipTrigger>
				<TooltipContent side="right" align="center" className="bg-black text-white border-white/10">
					{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
