// /components/chat/emoji-popover.tsx
"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Theme } from "emoji-picker-react";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
	ssr: false,
	loading: () => <div className="p-4 text-sm text-zinc-400">Loading emojis...</div>,
});

interface EmojiPopoverProps {
	updateMessage: (value: string) => void;
	reactionsDefaultOpen?: boolean;
	align?: "start" | "center" | "end";
}

export function EmojiPopover({ updateMessage, reactionsDefaultOpen = false, align = "end" }: EmojiPopoverProps) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button title="Emoji" type="button" className="p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-white/10 transition-colors">
					<Smile className="w-5 h-5" />
				</button>
			</PopoverTrigger>

			<PopoverContent align={align} className="w-auto p-0 border-none bg-transparent" sideOffset={8}>
				{open && (
					<EmojiPicker
						theme={Theme.DARK}
						reactionsDefaultOpen={reactionsDefaultOpen}
						onEmojiClick={(emojiData) => {
							updateMessage(emojiData.emoji);
							setOpen(false);
						}}
						lazyLoadEmojis
						height={400}
						width={350}
					/>
				)}
			</PopoverContent>
		</Popover>
	);
}
