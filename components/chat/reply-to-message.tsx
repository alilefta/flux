"use client";

import { ChannelMessage } from "@/schemas/message";
import { UserAvatar } from "../user/user-avatar";
import { Ban, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReplyToMessage({ replyTo, onNavigateToReply }: { replyTo: ChannelMessage; onNavigateToReply: () => void }) {
	return (
		<div className="flex items-center gap-2 mb-1 relative">
			{/* The "Elbow" Line */}
			<div className="absolute left-3.5 top-[50%] w-8 h-3 border-l-2 border-t-2 border-[#3f3f46] rounded-tl-md -translate-y-1/2" />

			<div
				onClick={replyTo.deleted ? undefined : onNavigateToReply}
				className={cn("ml-10 flex items-center gap-1.5 cursor-pointer transition-opacity group/reply", replyTo.deleted ? "opacity-50 cursor-not-allowed" : "hover:opacity-80")}
			>
				<UserAvatar src={replyTo.member.profile.imageUrl ?? undefined} className="h-4 w-4" />

				<span className="text-[11px] text-zinc-400 font-bold hover:underline">{replyTo.member.profile.name}</span>

				{/* Smart Content Preview */}
				<span className="text-[11px] text-zinc-500 truncate max-w-75 group-hover/reply:text-zinc-400 transition-colors">
					{replyTo.deleted ? (
						<span className="italic flex items-center gap-1">
							<Ban className="w-3 h-3" /> (Original message deleted)
						</span>
					) : (
						// Show content OR "Attachment" if file-only
						replyTo.content || (
							<span className="italic flex items-center gap-1 text-indigo-400">
								<ImageIcon className="w-3 h-3" /> Click to view attachment
							</span>
						)
					)}
				</span>
			</div>
		</div>
	);
}
