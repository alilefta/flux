// /components/chat/reaction-picker.tsx
"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import EmojiPicker, { Theme, EmojiClickData } from "emoji-picker-react";
import { useState } from "react";

interface ReactionPickerProps {
	onSelect: (emoji: string) => void;
	//  Prop to notify parent about state
	onOpenChange?: (isOpen: boolean) => void;
}

// ✅ Default reactions (like Discord/Slack)
const DEFAULT_REACTIONS = [
	"1f44d", // 👍
	"2764-fe0f", // ❤️
	"1f602", // 😂
	"1f62e", // 😮
	"1f622", // 😢
	"1f64f", // 🙏
	"1f389", // 🎉
	"1f525", // 🔥
];

export const ReactionPicker = ({ onSelect, onOpenChange }: ReactionPickerProps) => {
	const [open, setOpen] = useState(false);

	const handleReactionClick = (emojiData: EmojiClickData) => {
		onSelect(emojiData.emoji);
		handleOpenChange(false);
	};

	const handleOpenChange = (value: boolean) => {
		setOpen(value);
		// ✅ Notify parent
		if (onOpenChange) {
			onOpenChange(value);
		}
	};

	return (
		<Popover open={open} onOpenChange={handleOpenChange}>
			<PopoverTrigger title="Add Reaction" type="button" className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 transition">
				<Smile className="w-3.5 h-3.5" />
			</PopoverTrigger>
			<PopoverContent align="start" className="w-auto p-0 border-none bg-transparent" sideOffset={8}>
				<EmojiPicker theme={Theme.DARK} reactionsDefaultOpen reactions={DEFAULT_REACTIONS} onReactionClick={handleReactionClick} allowExpandReactions lazyLoadEmojis height={400} width={350} />
			</PopoverContent>
		</Popover>
	);
};
