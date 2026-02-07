"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { joinServerAction } from "@/actions/server";
import { Server } from "@/generated/prisma/client";
import { Loader2, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface InviteUIProps {
	server: Server;
	memberCount: number;
}

export const InviteUI = ({ server, memberCount }: InviteUIProps) => {
	const router = useRouter();

	const { execute, status } = useAction(joinServerAction, {
		onSuccess: (data) => {
			if (data?.data?.success && data.data.serverId) {
				toast.success("Access Granted", {
					description: `Connecting to ${server.name}...`,
					icon: <ShieldCheck className="text-emerald-500" size={16} />,
				});
				router.push(`/servers/${data.data.serverId}`);
			}
		},
		onError: ({ error }) => {
			toast.error("Access Denied", {
				description: error.serverError || "Please try again later",
			});
		},
	});

	const isJoining = status === "executing";

	return (
		<div className="w-full max-w-[420px] animate-in fade-in slide-in-from-bottom-8 duration-700">
			{/* THE GLASS CARD */}
			<div className="glass-panel p-8 rounded-[32px] flex flex-col items-center text-center shadow-2xl border border-white/10 relative overflow-hidden group">
				{/* Subtle Shine Effect on Hover */}
				<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

				{/* 1. TOP BADGE (Members) */}
				<div className="mb-8 animate-in fade-in zoom-in duration-1000 delay-100">
					<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg">
						<Users className="w-3.5 h-3.5 text-zinc-400" />
						<span className="text-xs font-medium text-zinc-300">
							<span className="text-white font-bold">{memberCount}</span> Members
						</span>
					</div>
				</div>

				{/* 2. SERVER ICON (Hero) */}
				<div className="relative mb-6 group-hover:scale-105 transition-transform duration-500 ease-out">
					{/* Glow Behind */}
					<div className="absolute inset-0 bg-indigo-500/40 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />

					{/* The Image Container */}
					<div className="relative w-32 h-32 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] bg-[#1e1e22]">
						{server.imageUrl ? (
							<Image fill src={server.imageUrl} alt={server.name} className="object-cover" />
						) : (
							<div className="w-full h-full flex items-center justify-center text-5xl font-bold text-zinc-700 bg-zinc-900">{server.name[0].toUpperCase()}</div>
						)}
					</div>
				</div>

				{/* 3. CONTENT */}
				<div className="space-y-2 mb-8 z-10">
					<p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Invite to Workspace</p>
					<h1 className="text-2xl font-bold text-white tracking-tight">{server.name}</h1>
				</div>

				{/* 4. ACTIONS */}
				<div className="w-full space-y-3 z-10">
					<Button
						disabled={isJoining}
						onClick={() => execute({ inviteCode: server.inviteCode })}
						className={cn(
							"w-full h-12 text-sm font-bold bg-white text-black hover:bg-zinc-200 rounded-xl transition-all active:scale-[0.98]",
							"shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
						)}
					>
						{isJoining ? (
							<Loader2 className="w-4 h-4 animate-spin" />
						) : (
							<span className="flex items-center gap-2">
								Join Workspace <ArrowRight className="w-4 h-4" />
							</span>
						)}
					</Button>

					<Button variant="ghost" onClick={() => router.push("/setup")} className="w-full text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl h-10 text-xs">
						No thanks
					</Button>
				</div>
			</div>
		</div>
	);
};
