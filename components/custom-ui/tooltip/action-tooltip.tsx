import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ActionTooltip({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<TooltipProvider delayDuration={50}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side="top" className="bg-black border-white/10 text-xs font-semibold">
					{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
