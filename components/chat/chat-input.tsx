"use client";

import { Plus, Smile, Send } from "lucide-react";

interface ChatInputProps {
	placeholder?: string;
}

export const ChatInput = ({ placeholder }: ChatInputProps) => {
	return (
		<div className="px-4 pb-4">
			<div className="relative rounded-xl p-1 flex items-end gap-2 border border-white/10 bg-black/40 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all">
				<button className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
					<Plus className="w-5 h-5" />
				</button>

				<textarea
					placeholder={placeholder || "Message..."}
					className="w-full bg-transparent text-sm text-white placeholder-zinc-500 resize-none max-h-32 min-h-[40px] py-2.5 focus:outline-none font-sans"
					rows={1}
				/>

				<div className="flex items-center gap-1 pb-1 shrink-0">
					<button className="p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-white/10 transition-colors">
						<Smile className="w-5 h-5" />
					</button>
					<button className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-primary hover:bg-primary/10 transition-colors">
						<Send className="w-4 h-4" />
					</button>
				</div>
			</div>

			{/* Optional: Typing Indicator Slot */}
		</div>
	);
};
