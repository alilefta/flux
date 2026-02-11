"use client";

import { format, isToday, isYesterday } from "date-fns";
import { cn } from "@/lib/utils";

interface ChatDateSeparatorProps {
	date: Date;
}

export const ChatDateSeparator = ({ date }: ChatDateSeparatorProps) => {
	const formatDateLabel = (date: Date) => {
		if (isToday(date)) return "Today";
		if (isYesterday(date)) return "Yesterday";
		return format(date, "MMMM d, yyyy");
	};

	return (
		<div className="flex items-center justify-center my-6 relative group">
			{/* 1. The Line (Divider) */}
			<div className="absolute left-0 right-0 h-[1px] bg-white/5 group-hover:bg-white/10 transition-colors" />

			{/* 2. The Pill (Content) */}
			<span className="relative bg-[#141417] px-4 py-1 rounded-full text-[10px] font-bold text-zinc-500 uppercase tracking-widest border border-white/5 group-hover:text-zinc-400 group-hover:border-white/10 transition-all shadow-sm">
				{formatDateLabel(date)}
			</span>
		</div>
	);
};
