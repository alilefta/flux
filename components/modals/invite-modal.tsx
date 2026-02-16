"use client";

import { useModal } from "@/hooks/use-modal-store";
import { useOrigin } from "@/hooks/use-origin";
import { Check, Copy, RefreshCw, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const InviteModal = () => {
	const isOpen = useModal((state) => state.isOpen);
	const onClose = useModal((state) => state.onClose);
	const type = useModal((state) => state.type);
	const data = useModal((state) => state.data);
	const origin = useOrigin();

	const isModalOpen = isOpen && type === "invite";
	const { server } = data; // We passed this when opening

	const [copied, setCopied] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	// Construct the full invite URL
	// Note: We need to build the /invite/[code] route later for this to actually redirect
	// For now, it just looks correct.
	const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

	const onCopy = () => {
		navigator.clipboard.writeText(inviteUrl);
		setCopied(true);
		toast.success("Link Copied", {
			description: "Send this to your team to grant access.",
			icon: <Zap className="text-amber-400" size={16} />,
		});

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	const onNew = async () => {
		try {
			setIsLoading(true);
			// TODO: Create a "regenerateCode" Server Action later
			toast.info("Regenerating...", { description: "Feature coming in V1.1" });
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#141417]/90 backdrop-blur-xl border border-white/5 text-white p-0 overflow-hidden shadow-2xl sm:max-w-md">
				<DialogHeader className="pt-8 px-6">
					<DialogTitle className="text-2xl text-center font-bold">Invite Friends</DialogTitle>
				</DialogHeader>

				<div className="p-6">
					<Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">Server Invite Link</Label>
					<div className="flex items-center mt-2 gap-x-2">
						<Input disabled={isLoading} className="bg-black/30 border-white/10 text-white focus-visible:ring-0 focus-visible:ring-offset-0" value={inviteUrl} readOnly />
						<Button disabled={isLoading} onClick={onCopy} size="icon" className="bg-primary hover:bg-primary/90">
							{copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
						</Button>
					</div>

					<Button onClick={onNew} disabled={isLoading} variant="link" size="sm" className="text-xs text-zinc-500 mt-4 px-0 hover:text-white">
						Generate a new link
						<RefreshCw className="w-3 h-3 ml-2" />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
