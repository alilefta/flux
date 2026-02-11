import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import EmojiPicker, { Theme } from "emoji-picker-react";

interface EmojiPopoverProps {
	updateMessage: (value: string) => void;
}

export function EmojiPopover({ updateMessage }: EmojiPopoverProps) {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button title="Emoji" className="top-0 bottom-0 p-2 rounded-lg text-zinc-400 hover:text-yellow-400 hover:bg-white/10 transition-colors disabled:opacity-50">
					<Smile className="w-5 h-5" />
				</button>
			</PopoverTrigger>
			<PopoverContent popoverTargetAction="toggle" align="end">
				<EmojiPicker
					theme={Theme.DARK}
					onEmojiClick={(emoji) => {
						updateMessage(emoji.emoji);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
