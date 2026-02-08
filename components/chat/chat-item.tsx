"use client";

import { Edit, ShieldAlert, ShieldCheck, Trash, FileIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UserAvatar } from "../user/user-avatar";
import { MemberProfile } from "@/schemas/member";

interface ChatItemProps {
	id: string;
	content: string;
	member: MemberProfile; // Using loose type here based on your complicated Prisma include
	timestamp: string;
	fileUrl: string | null;
	deleted: boolean;
	currentMember: MemberProfile;
	isUpdated: boolean;
	socketUrl: string;
	socketQuery: Record<string, string>;
}

const roleIconMap = {
	GUEST: null,
	MODERATOR: <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />,
	ADMIN: <ShieldAlert className="h-3.5 w-3.5 text-rose-500" />,
};

export const ChatItem = ({ id, content, member, timestamp, fileUrl, deleted, currentMember, isUpdated }: ChatItemProps) => {
	const [isEditing, setIsEditing] = useState(false);

	const isAdmin = currentMember.role === "ADMIN";
	const isOwner = currentMember.id === member.id;
	const canDeleteMessage = !deleted && (isAdmin || isOwner);
	const canEditMessage = !deleted && isOwner && !fileUrl;
	const isPDF = fileUrl?.endsWith(".pdf");
	const isImage = !isPDF && fileUrl;

	return (
		<div className="relative group flex items-start gap-x-4 py-2 px-6 hover:bg-white/[0.03] transition-colors w-full">
			{/* 1. Avatar (Fixed width to prevent shifting) */}
			<div className="cursor-pointer hover:drop-shadow-lg transition flex-shrink-0 mt-0.5">
				<UserAvatar
					name={member.profile.name}
					src={member.profile.imageUrl ?? undefined}
					className="h-8 w-8" // Standard size
				/>
			</div>

			{/* 2. Message Body */}
			<div className="flex flex-col w-full min-w-0">
				{/* Header: Name + Metadata */}
				<div className="flex items-center gap-x-2">
					<div className="flex items-center gap-x-1">
						<span className="font-bold text-sm text-white hover:underline cursor-pointer">{member.profile.name}</span>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>{roleIconMap[member.role as keyof typeof roleIconMap]}</TooltipTrigger>
								<TooltipContent className="bg-black text-white text-xs border-white/10">{member.role}</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<span className="text-[10px] text-zinc-500">{timestamp}</span>
				</div>

				{/* Content Area */}
				{isImage && (
					<a
						href={fileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="relative aspect-square rounded-xl mt-2 overflow-hidden border border-white/10 flex items-center bg-black/20 h-48 w-48 hover:scale-[1.02] transition-transform"
					>
						<Image src={fileUrl} alt={content} fill className="object-cover" />
					</a>
				)}

				{isPDF && (
					<div className="relative flex items-center p-4 mt-2 rounded-md bg-white/5 border border-white/10 w-fit gap-x-2">
						<FileIcon className="h-8 w-8 text-indigo-400" />
						<a href={fileUrl} target="_blank" rel="noopener noreferrer" className="ml-2 text-sm text-indigo-400 hover:underline font-bold">
							PDF File
						</a>
					</div>
				)}

				{!fileUrl && !isEditing && (
					<p
						className={cn(
							"text-[15px] text-zinc-300 mt-0.5 leading-relaxed font-normal",
							"break-words whitespace-pre-wrap overflow-hidden",
							deleted && "italic text-zinc-500 text-xs mt-1",
						)}
					>
						{content}
						{isUpdated && !deleted && <span className="text-[10px] mx-2 text-zinc-500 select-none">(edited)</span>}
					</p>
				)}

				{/* Edit Mode Input */}
				{isEditing && (
					<div className="mt-2 w-full">
						<form
							className="flex items-center w-full gap-x-2 pt-2"
							onSubmit={(e) => {
								e.preventDefault();
								setIsEditing(false);
								// Add save logic here later
							}}
						>
							<div className="relative w-full">
								<input
									className="p-3 bg-zinc-900/90 border border-white/10 rounded-lg text-zinc-200 w-full text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
									defaultValue={content}
									autoFocus
								/>
							</div>
							<div className="text-[10px] mt-1 text-zinc-400">
								<span className="text-indigo-400 cursor-pointer hover:underline" onClick={() => setIsEditing(false)}>
									Cancel
								</span>
							</div>
						</form>
					</div>
				)}
			</div>

			{/* 3. Floating Action Bar (Top Right of Message) */}
			{canDeleteMessage && (
				<div className="hidden group-hover:flex items-center gap-x-1 absolute -top-3 right-5 bg-[#09090b] border border-white/10 p-1 rounded-lg shadow-xl z-20">
					{canEditMessage && (
						<ActionTooltip label="Edit">
							<button onClick={() => setIsEditing(!isEditing)} className="cursor-pointer hover:bg-white/10 p-1.5 rounded-md text-zinc-400 hover:text-white transition">
								<Edit className="w-3.5 h-3.5" />
							</button>
						</ActionTooltip>
					)}
					<ActionTooltip label="Delete">
						<button
							onClick={() => {
								// Open modal using your useModal hook here
								console.log("Delete");
							}}
							className="cursor-pointer hover:bg-red-500/10 p-1.5 rounded-md text-zinc-400 hover:text-red-500 transition"
						>
							<Trash className="w-3.5 h-3.5" />
						</button>
					</ActionTooltip>
				</div>
			)}
		</div>
	);
};

function ActionTooltip({ label, children }: { label: string; children: React.ReactNode }) {
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
