"use client";

import { useState } from "react";
import { Edit, Trash, CornerUpLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionTooltip } from "@/components/custom-ui/tooltip/action-tooltip";
import { ReactionPicker } from "./reaction-picker";

interface ChatItemActionsProps {
	canDeleteMessage: boolean;
	canEditMessage: boolean;
	isDeleted: boolean;
	isEditPending: boolean;
	isDeletePending: boolean;
	isOptimistic: boolean;
	onReply: () => void;
	onEdit: () => void;
	onDelete: () => void;
	onReaction: (emoji: string) => void;
}

export const ChatItemActions = ({ canDeleteMessage, canEditMessage, isDeleted, isEditPending, isDeletePending, isOptimistic, onReply, onEdit, onDelete, onReaction }: ChatItemActionsProps) => {
	const [isReactionPickerOpen, setIsReactionPickerOpen] = useState(false);

	if (!canDeleteMessage) return null;

	return (
		<div
			className={cn(
				"flex items-center gap-x-1 absolute -top-3 right-5 bg-[#09090b] border border-white/10 p-1 rounded-lg shadow-xl z-20 transition-opacity duration-200",
				// Logic isolated here:
				isReactionPickerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto",
			)}
		>
			{!isDeleted && <ReactionPicker onSelect={onReaction} onOpenChange={setIsReactionPickerOpen} />}

			<ActionTooltip label="Reply">
				<button
					title="Reply"
					disabled={isOptimistic}
					onClick={onReply}
					className={cn("cursor-pointer hover:bg-white/10 p-1.5 rounded-md text-zinc-400 hover:text-white transition", isOptimistic && "opacity-50 cursor-not-allowed")}
				>
					<CornerUpLeft className="w-3.5 h-3.5" />
				</button>
			</ActionTooltip>

			{canEditMessage && (
				<ActionTooltip label="Edit">
					<button
						title="Edit"
						onClick={onEdit}
						disabled={isEditPending}
						className="cursor-pointer hover:bg-white/10 p-1.5 rounded-md text-zinc-400 hover:text-white transition disabled:opacity-50"
					>
						<Edit className="w-3.5 h-3.5" />
					</button>
				</ActionTooltip>
			)}

			<ActionTooltip label="Delete">
				<button
					title="Delete"
					onClick={onDelete}
					disabled={isDeletePending}
					className="cursor-pointer hover:bg-red-500/10 p-1.5 rounded-md text-zinc-400 hover:text-red-500 transition disabled:opacity-50"
				>
					<Trash className="w-3.5 h-3.5" />
				</button>
			</ActionTooltip>
		</div>
	);
};
