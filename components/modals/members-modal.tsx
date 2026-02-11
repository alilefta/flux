"use client";

import { useModal } from "@/hooks/use-modal-store";
import { ServerDetails } from "@/schemas/server";
import { MemberRole } from "@/generated/prisma/enums";
import { Check, Gavel, Loader2, MoreVertical, Shield, ShieldAlert, ShieldCheck, ShieldQuestion, User } from "lucide-react";
import { useState } from "react";
import { useAction } from "next-safe-action/hooks";
import { kickMemberAction, updateMemberRoleAction } from "@/actions/member";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserAvatar } from "@/components/user/user-avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Professional Badges for Roles
const RoleBadge = ({ role }: { role: MemberRole }) => {
	if (role === "GUEST") return null;

	return (
		<div
			className={cn(
				"flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border shadow-sm",
				role === "ADMIN" && "bg-rose-500/10 text-rose-400 border-rose-500/20",
				role === "MODERATOR" && "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
			)}
		>
			{role === "ADMIN" && <ShieldAlert className="w-3 h-3" />}
			{role === "MODERATOR" && <ShieldCheck className="w-3 h-3" />}
			<span>{role}</span>
		</div>
	);
};

export const MembersModal = () => {
	const router = useRouter();
	const { onOpen, isOpen, onClose, type, data } = useModal();
	const [loadingId, setLoadingId] = useState("");

	const isModalOpen = isOpen && type === "members";
	const { server } = data as { server: ServerDetails };

	// --- ACTIONS ---
	const { execute: kickMember } = useAction(kickMemberAction, {
		onSuccess: () => {
			router.refresh();
			toast.success("Member Removed", {
				description: "They have been kicked from the server.",
				icon: <Gavel className="text-rose-500" size={16} />,
			});
			setLoadingId("");
		},
		onError: ({ error }) => {
			setLoadingId("");
			toast.error(error.serverError || "Failed to kick member");
		},
	});

	const { execute: updateRole } = useAction(updateMemberRoleAction, {
		onSuccess: ({ data }) => {
			router.refresh();
			toast.success("Permissions Updated", {
				description: `Member is now a ${data?.member?.role}`,
				icon: <ShieldCheck className="text-emerald-500" size={16} />,
			});
			setLoadingId("");
		},
		onError: ({ error }) => {
			setLoadingId("");
			toast.error(error.serverError || "Failed to update role");
		},
	});

	const onKick = (memberId: string) => {
		setLoadingId(memberId);
		kickMember({ serverId: server?.id, memberId });
	};

	const onRoleChange = (memberId: string, role: MemberRole) => {
		setLoadingId(memberId);
		updateRole({ serverId: server?.id, memberId, role });
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#141417]/95 backdrop-blur-2xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md gap-0 rounded-2xl">
				{/* HEADER */}
				<DialogHeader className="pt-8 px-6 bg-zinc-900/50 pb-6 border-b border-white/5">
					<DialogTitle className="text-2xl text-center font-bold flex items-center justify-center gap-2">
						<User className="w-6 h-6 text-zinc-400" />
						Manage Members
					</DialogTitle>
					<DialogDescription className="text-center text-zinc-400 font-mono text-xs uppercase tracking-widest mt-2">{server?.members?.length} Active Members</DialogDescription>
				</DialogHeader>

				<ScrollArea className="max-h-105 bg-black/20">
					<div className="p-6 space-y-2">
						{server?.members?.map((member) => (
							<div
								key={member.id}
								className="group flex items-center gap-x-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5"
								onClick={() => onOpen("userProfile", { member })}
							>
								{/* 1. Avatar */}
								<UserAvatar src={member.profile.imageUrl ?? undefined} className="h-10 w-10 border border-white/10" />

								{/* 2. User Info */}
								<div className="flex flex-col min-w-0">
									<div className="flex items-center gap-2">
										<span className="font-semibold text-sm text-white truncate group-hover:text-indigo-200 transition-colors">{member.profile.name}</span>
										<RoleBadge role={member.role} />
									</div>
									<p className="text-xs text-zinc-500 truncate font-mono">{member.profile.email}</p>
								</div>

								{/* 3. Actions */}
								<div className="ml-auto flex items-center gap-2">
									{loadingId === member.id && <Loader2 className="animate-spin text-zinc-500 w-4 h-4" />}

									{/* Don't show menu for Server Owner */}
									{server?.profileId !== member.profileId && loadingId !== member.id && (
										<DropdownMenu>
											<DropdownMenuTrigger className="focus:outline-none">
												<div className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/10 transition-colors">
													<MoreVertical className="h-4 w-4" />
												</div>
											</DropdownMenuTrigger>

											<DropdownMenuContent side="left" className="bg-[#141417] border-white/10 text-zinc-300 w-48 shadow-xl backdrop-blur-xl">
												{/* ROLE SUBMENU */}
												<DropdownMenuSub>
													<DropdownMenuSubTrigger className="flex items-center hover:bg-white/5 cursor-pointer py-2 focus:bg-white/5 focus:text-white">
														<ShieldQuestion className="w-4 h-4 mr-2 text-indigo-400" />
														<span>Change Role</span>
													</DropdownMenuSubTrigger>
													<DropdownMenuPortal>
														<DropdownMenuSubContent className="bg-[#141417] border-white/10 text-zinc-300 shadow-xl ml-2 w-40">
															<DropdownMenuItem
																onClick={() => onRoleChange(member.id, "GUEST")}
																className="hover:bg-white/5 cursor-pointer focus:bg-white/5 focus:text-white"
															>
																<Shield className="h-4 w-4 mr-2 text-zinc-400" />
																Guest
																{member.role === "GUEST" && <Check className="h-4 w-4 ml-auto text-emerald-500" />}
															</DropdownMenuItem>
															<DropdownMenuItem
																onClick={() => onRoleChange(member.id, "MODERATOR")}
																className="hover:bg-white/5 cursor-pointer focus:bg-white/5 focus:text-white"
															>
																<ShieldCheck className="h-4 w-4 mr-2 text-indigo-400" />
																Moderator
																{member.role === "MODERATOR" && <Check className="h-4 w-4 ml-auto text-emerald-500" />}
															</DropdownMenuItem>
														</DropdownMenuSubContent>
													</DropdownMenuPortal>
												</DropdownMenuSub>

												<DropdownMenuSeparator className="bg-white/10" />

												{/* KICK OPTION */}
												<DropdownMenuItem
													onClick={() => onKick(member.id)}
													className="text-rose-500 hover:bg-rose-500/10 cursor-pointer focus:bg-rose-500/10 focus:text-rose-400 py-2"
												>
													<Gavel className="h-4 w-4 mr-2" />
													Kick Member
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									)}
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};
