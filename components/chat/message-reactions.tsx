// /components/chat/message-reactions.tsx
"use client";

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageReaction } from "@/schemas/message";
import React from "react";

interface MessageReactionsProps {
	reactions: MessageReaction[];
	currentProfileId: string;
	onReactionClick: (emoji: string) => void;
}

export const MessageReactions = React.memo(
	function MessageReactions({ reactions, currentProfileId, onReactionClick }: MessageReactionsProps) {
		if (!reactions || reactions.length === 0) return null;

		// Group reactions by emoji
		const groupedReactions = reactions.reduce(
			(acc, reaction) => {
				if (!acc[reaction.emoji]) {
					acc[reaction.emoji] = [];
				}
				acc[reaction.emoji].push(reaction);
				return acc;
			},
			{} as Record<string, MessageReaction[]>,
		);

		return (
			<div className="flex flex-wrap gap-1 mt-1.5">
				{Object.entries(groupedReactions).map(([emoji, reactionList]) => {
					const hasReacted = reactionList.some((r) => r.profileId === currentProfileId);
					const count = reactionList.length;

					return (
						<TooltipProvider key={emoji} delayDuration={300}>
							<Tooltip>
								<TooltipTrigger asChild>
									<button
										onClick={() => onReactionClick(emoji)}
										className={cn(
											"flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium transition-all",
											hasReacted
												? "bg-indigo-600/20 border border-indigo-500/50 text-white hover:bg-indigo-600/30"
												: "bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:border-white/20",
										)}
									>
										<span className="text-sm leading-none">{emoji}</span>
										<span className="text-xs leading-none">{count}</span>
									</button>
								</TooltipTrigger>
								<TooltipContent className="bg-black text-white text-xs border-white/10 max-w-xs" side="top">
									<div className="space-y-0.5">
										{reactionList.slice(0, 5).map((r, i) => (
											<div key={r.id}>{r.profileId === currentProfileId ? "You" : `User ${i + 1}`}</div>
										))}
										{reactionList.length > 5 && <div className="text-zinc-400">+{reactionList.length - 5} more</div>}
									</div>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					);
				})}
			</div>
		);
	}, // Custom Comparison for Memo
	(prev, next) => {
		// Only re-render if reactions length changes or if the user's reaction status might have changed
		// For simplicity, we compare length and a quick signature

		// ✅ Null-safe attachment comparison
		const prevReactions = prev.reactions || [];
		const nextReactions = next.reactions || [];

		if (prevReactions.length !== nextReactions.length) return false;

		const prevSig = prev.reactions
			.map((r) => r.emoji + r.profileId)
			.sort()
			.join("");
		const nextSig = next.reactions
			.map((r) => r.emoji + r.profileId)
			.sort()
			.join("");

		return prevSig === nextSig;
	},
);
