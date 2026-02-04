"use client";

import { Profile } from "@/schemas/profile";
import { Message } from "@/schemas/message";
import { Edit, ShieldAlert, ShieldCheck, Trash } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ChatItemProps {
	id: string;
	content: string;
	member: Profile;
	timestamp: string;
	fileUrl: string | null;
	deleted: boolean;
	currentMember: Profile;
	isUpdated: boolean;
	socketUrl: string;
	socketQuery: Record<string, string>;
}

const roleIconMap = {
	GUEST: null,
	MODERATOR: <ShieldCheck className="h-4 w-4 text-indigo-500 ml-2" />,
	ADMIN: <ShieldAlert className="h-4 w-4 text-rose-500 ml-2" />,
};

export const ChatItem = ({ id, content, member, timestamp, fileUrl, deleted, currentMember, isUpdated }: ChatItemProps) => {
	const [isEditing, setIsEditing] = useState(false);

	// Permissions logic
	const isAdmin = currentMember.id === "admin-id"; // Replace with real role check later
	const isOwner = currentMember.id === member.id;
	const canDeleteMessage = !deleted && (isAdmin || isOwner);
	const canEditMessage = !deleted && isOwner && !fileUrl;

	return (
		<div className="relative group flex items-start gap-x-3 py-4 px-6 hover:bg-white/2 transition w-full">
			{/* 1. Avatar */}
			<div className="cursor-pointer hover:drop-shadow-md transition">
				<div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
					<Image fill src={member.imageUrl} alt={member.name} className="object-cover" />
				</div>
			</div>

			{/* 2. Message Content */}
			<div className="flex flex-col w-full min-w-0">
				<div className="flex items-center gap-x-2">
					<div className="flex items-center">
						<p className="font-semibold text-sm hover:underline cursor-pointer text-white">{member.name}</p>
						{/* Role Icon would go here based on member.role */}
					</div>
					<span className="text-[10px] text-zinc-500 font-mono">{timestamp}</span>
				</div>

				{/* Text or Image */}
				{fileUrl && (
					<a
						href={fileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="relative aspect-square rounded-md mt-2 overflow-hidden border border-white/10 flex items-center bg-black/20 h-48 w-48"
					>
						<Image src={fileUrl} alt={content} fill className="object-cover" />
					</a>
				)}

				{!fileUrl && !isEditing && (
					<p className={cn("text-sm text-zinc-300 mt-1 whitespace-pre-wrap break-words leading-relaxed", deleted && "italic text-zinc-500 text-xs mt-1")}>
						{content}
						{isUpdated && !deleted && <span className="text-[10px] mx-2 text-zinc-500">(edited)</span>}
					</p>
				)}

				{/* Placeholder for Edit Form */}
				{isEditing && (
					<div className="mt-2">
						<div className="p-2 bg-black/30 border border-white/10 rounded-lg">
							<input title="Edit" className="bg-transparent border-none focus:outline-none text-zinc-200 w-full text-sm" defaultValue={content} />
						</div>
						<div className="text-[10px] mt-1 text-zinc-500">
							Press <kbd className="font-mono text-zinc-400">Enter</kbd> to save
						</div>
					</div>
				)}
			</div>

			{/* 3. Floating Action Buttons (Delete/Edit) */}
			{canDeleteMessage && (
				<div className="hidden group-hover:flex items-center gap-x-2 absolute -top-2 right-5 bg-[#1e1e22] border border-white/10 p-1 rounded-lg shadow-xl z-20">
					{canEditMessage && (
						<ActionTooltip label="Edit">
							<button
								title="Edit Message"
								onClick={() => setIsEditing(!isEditing)}
								className="cursor-pointer ml-auto hover:bg-white/10 p-1 rounded-md text-zinc-400 hover:text-white transition"
							>
								<Edit className="w-4 h-4" />
							</button>
						</ActionTooltip>
					)}
					<ActionTooltip label="Delete">
						<button
							title="Delete Message"
							onClick={() => console.log("Delete message")}
							className="cursor-pointer ml-auto hover:bg-red-500/10 p-1 rounded-md text-zinc-400 hover:text-red-500 transition"
						>
							<Trash className="w-4 h-4" />
						</button>
					</ActionTooltip>
				</div>
			)}
		</div>
	);
};

// Helper component for tooltips within the item
function ActionTooltip({ label, children }: { label: string; children: React.ReactNode }) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side="top" className="bg-black border-white/10 text-xs">
					{label}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
