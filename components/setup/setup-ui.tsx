"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { joinServerAction } from "@/actions/server";
import { Zap, ArrowRight, Hash, Loader2, Activity, Terminal, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InferSafeActionFnResult } from "next-safe-action";
import { toast } from "sonner";
import { CreateServerModal } from "../modals/create-server-modal";

type JoinServerActionResults = InferSafeActionFnResult<typeof joinServerAction>;

export const SetupUI = () => {
	const { onOpen } = useModal();
	const router = useRouter();
	const [inviteCode, setInviteCode] = useState("");

	const {
		executeAsync: executeJoinServer,
		isExecuting: isJoining,
		result,
	} = useAction(joinServerAction, {
		onSuccess: (data) => {
			if (data?.data?.success && data.data.serverId) {
				router.push(`/servers/${data.data.serverId}`);
			}
		},
		onError: ({ error }) => handleActionError(error),
	});

	const handleActionError = (error: { serverError?: JoinServerActionResults["serverError"]; validationErrors?: JoinServerActionResults["validationErrors"] }) => {
		if (error.validationErrors) {
			toast.error("PROTOCOL_REJECTED", {
				description: "INPUT_INTEGRITY_FAILURE // CHECK_REQUIRED_FIELDS",
				icon: <Activity className="text-red-500" size={16} />,
			});

			console.log(error.validationErrors);
		}
		if (error.serverError) {
			toast.error("SYSTEM_HALT", {
				description: error.serverError.toUpperCase(),
				icon: <Terminal className="text-red-500" size={16} />,
			});
		}
	};

	const onJoinSubmit = (inviteCode: string) => {
		router.push(`/invite/${inviteCode}`);
	};

	const error = result.data?.error;

	return (
		// CHANGED: max-w-lg for better breathing room
		<div className="w-full max-w-120 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
			{/* 1. Header Section - Clean Typography */}
			<div className="text-center space-y-4">
				<div className="flex justify-center mb-6">
					<div className="w-20 h-20 bg-lieanr-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.3)] ring-1 ring-white/20">
						<Zap className="w-10 h-10 text-white fill-white" />
					</div>
				</div>
				<h1 className="text-4xl font-bold tracking-tight text-white font-sans">Welcome to Flux</h1>
				<p className="text-lg text-zinc-400 font-normal">The collaborative operating system for engineering teams.</p>
			</div>

			{/* 2. The Glass Card - Reduced visual noise */}
			<div className="glass-panel p-8 rounded-3xl space-y-6 shadow-2xl border border-white/5">
				{/* OPTION A: Create Server */}
				<Button
					onClick={() => onOpen("createServer")}
					className="w-full h-14 bg-white hover:bg-zinc-200 text-black font-semibold text-base shadow-lg transition-all active:scale-[0.98] rounded-xl"
				>
					Create New Workspace
				</Button>

				{/* Divider */}
				<div className="relative py-2">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t border-white/10" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-[#141417] px-3 text-zinc-500 font-medium tracking-wider">Or join existing</span>
					</div>
				</div>

				{/* OPTION B: Join Server */}
				<div className="space-y-4">
					<div className="relative group">
						<Hash className="absolute left-4 top-3.5 h-5 w-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
						<Input
							disabled={isJoining}
							value={inviteCode}
							onChange={(e) => setInviteCode(e.target.value)}
							placeholder="Enter invite code..."
							className="pl-12 h-12 bg-black/40 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-indigo-500/50 rounded-xl transition-all"
						/>
					</div>

					{error && (
						<div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg text-sm">
							<AlertCircle size={14} />
							{error}
						</div>
					)}

					<Button
						disabled={isJoining || inviteCode.length < 3}
						onClick={() => onJoinSubmit(inviteCode)}
						variant="outline"
						className="w-full h-12 border-white/10 bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white rounded-xl transition-all"
					>
						{isJoining ? (
							<Loader2 className="w-5 h-5 animate-spin" />
						) : (
							<span className="flex items-center gap-2 font-medium">
								Join Workspace <ArrowRight className="w-4 h-4" />
							</span>
						)}
					</Button>
				</div>
			</div>

			<CreateServerModal />
		</div>
	);
};
