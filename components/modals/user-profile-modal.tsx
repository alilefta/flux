"use client";

import { useModal } from "@/hooks/use-modal-store";
import { format } from "date-fns";
import { CalendarDays, MessageSquare, Shield, ShieldAlert, ShieldCheck, User, MoreHorizontal, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { UserAvatar } from "@/components/user/user-avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const roleIconMap = {
	GUEST: <User className="w-3.5 h-3.5" />,
	MODERATOR: <ShieldCheck className="w-3.5 h-3.5" />,
	ADMIN: <ShieldAlert className="w-3.5 h-3.5" />,
};

const roleColorMap = {
	GUEST: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
	MODERATOR: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
	ADMIN: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export const UserProfileModal = () => {
	const { isOpen, onClose, type, data } = useModal();
	const isModalOpen = isOpen && type === "userProfile";
	const { member } = data;

	if (!member) return null;

	const onCopyId = () => {
		navigator.clipboard.writeText(member.id);
		toast.success("ID Copied to clipboard");
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#09090b] border border-white/10 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md gap-0 rounded-[24px]">
				<DialogHeader className="sr-only">
					<DialogTitle>{member.profile.name}</DialogTitle>
					<DialogDescription>User Profile Details</DialogDescription>
				</DialogHeader>

				{/* 1. HERO BANNER */}
				{/* Ready for coverImage: style={{ backgroundImage: `url(${member.profile.coverImage})` }} */}
				<div className="h-32 w-full bg-linear-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 relative group">
					{/* Technical Grid Pattern Overlay */}
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
					<div className="absolute inset-0 bg-black/10" />

					{/* Optional: Add a subtle 'shine' effect */}
					<div className="absolute inset-0 bg-linear-to-t from-[#09090b] to-transparent opacity-40" />
				</div>

				{/* 2. IDENTITY SECTION */}
				<div className="px-6 pb-6 relative">
					{/* FLOATING AVATAR + STATUS */}
					<div className="absolute -top-16 left-6">
						<div className="relative">
							<UserAvatar src={member.profile.imageUrl ?? undefined} className="h-48 w-48 border-[6px] border-[#09090b] bg-[#09090b]" />

							{/* Status Indicator (Positioned carefully on the ring) */}
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="absolute bottom-2 right-2 w-7 h-7 bg-[#09090b] rounded-full flex items-center justify-center">
											<div className="w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#09090b] shadow-sm animate-pulse" />
										</div>
									</TooltipTrigger>
									<TooltipContent side="right" className="bg-black text-xs font-bold border-white/10">
										Online
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</div>
					</div>

					{/* ACTIONS (Top Right) */}
					<div className="flex justify-end pt-4 gap-2">
						<Button onClick={onCopyId} variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10 text-zinc-400">
							<Copy className="w-4 h-4" />
						</Button>
						<Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10 text-zinc-400">
							<MoreHorizontal className="w-4 h-4" />
						</Button>
					</div>

					{/* USER INFO */}
					<div className="mt-12 space-y-1">
						<div className="flex items-center gap-3">
							<h2 className="text-2xl font-bold text-white truncate">{member.profile.name}</h2>
							{/* Role Badge */}
							<div
								className={cn(
									"flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border",
									roleColorMap[member.role as keyof typeof roleColorMap],
								)}
							>
								{roleIconMap[member.role as keyof typeof roleIconMap]}
								{member.role}
							</div>
						</div>
						<p className="text-sm text-zinc-400 font-medium">{member.profile.email}</p>
					</div>

					<Separator className="bg-white/10 my-6" />

					{/* 3. METADATA CARDS */}
					<div className="grid grid-cols-2 gap-4">
						{/* Member Since */}
						<div className="bg-white/3 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/5 transition-colors">
							<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold flex items-center gap-2">
								<CalendarDays className="w-3 h-3" /> Member Since
							</span>
							<span className="text-sm font-medium text-zinc-200">{format(new Date(member.createdAt), "MMM d, yyyy")}</span>
						</div>

						{/* Mutual Servers (Placeholder for V2) */}
						<div className="bg-white/3 border border-white/5 rounded-2xl p-4 flex flex-col gap-1 hover:bg-white/5 transition-colors">
							<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold flex items-center gap-2">
								<Shield className="w-3 h-3" /> Server ID
							</span>
							<span className="text-sm font-medium text-zinc-200 truncate">{member.serverId.substring(0, 12)}...</span>
						</div>
					</div>

					{/* 4. FOOTER ACTIONS */}
					<div className="mt-8">
						<Button className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.2)] transition-all active:scale-[0.98]">
							<MessageSquare className="w-4 h-4 mr-2" />
							Send Message
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
