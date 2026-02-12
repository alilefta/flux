"use client";

import { useModal } from "@/hooks/use-modal-store";
import { useAction } from "next-safe-action/hooks";
import { updateProfileAction } from "@/actions/profile";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { User, Palette, Bell, LogOut, Loader2, LucideIcon } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FluxInput } from "@/components/custom-ui/inputs/flux-input";
import { UserImageUpload } from "@/components/modals/inputs/user-image-upload";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

// Schema matches Server Action
const formSchema = z.object({
	name: z.string().min(1),
	imageUrl: z.url(),
});

type FormData = z.infer<typeof formSchema>;

export const UserSettingsModal = () => {
	const { isOpen, onClose, type, data } = useModal();
	const isModalOpen = isOpen && type === "userSettings";

	// We define tabs for future scalability
	const [activeTab, setActiveTab] = useState("account");

	// In a real app, you'd pass the profile in `data` when opening the modal
	// or fetch it via a hook. Let's assume `data.profile` is passed.
	const profile = data?.member?.profile || data?.profile;

	const methods = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			imageUrl: "",
		},
	});

	const { control, handleSubmit, setValue } = methods;

	useEffect(() => {
		if (profile) {
			setValue("name", profile.name);
			setValue("imageUrl", profile.imageUrl || "");
		}
	}, [profile, setValue, isModalOpen]);

	const { execute, status } = useAction(updateProfileAction, {
		onSuccess: () => {
			router.refresh();
			toast.success("Profile Updated");
			// Optional: don't close, just show success, so they can keep editing
		},
		onError: ({ error }) => {
			toast.error(error.serverError || "Update failed");
		},
	});

	const isLoading = status === "executing";
	const router = useRouter(); // Import this

	const onSubmit = (values: FormData) => execute(values);

	if (!profile) return null;

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className="bg-[#09090b] border border-white/10 text-white p-0 overflow-hidden shadow-2xl sm:max-w-4xl h-[600px] gap-0 rounded-2xl flex">
				<DialogHeader className="sr-only">
					<DialogTitle>{profile.name} Settings</DialogTitle>
					<DialogDescription>Shows the profile settings for {profile.name}</DialogDescription>
				</DialogHeader>
				{/* SIDEBAR */}
				<div className="w-60 bg-[#141417] p-6 flex flex-col gap-2 border-r border-white/5">
					<h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 px-2">Settings</h2>

					<SidebarItem icon={User} label="My Account" active={activeTab === "account"} onClick={() => setActiveTab("account")} />
					<SidebarItem icon={Palette} label="Appearance" active={activeTab === "appearance"} onClick={() => setActiveTab("appearance")} />
					<SidebarItem icon={Bell} label="Notifications" active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} />

					<Separator className="bg-white/5 my-2" />

					<div className="mt-auto">
						<SignOutButton>
							<button className="flex items-center gap-2 w-full px-2 py-2 rounded-md text-rose-500 hover:bg-rose-500/10 transition-colors text-sm font-medium">
								<LogOut className="w-4 h-4" />
								Log Out
							</button>
						</SignOutButton>
					</div>
				</div>

				{/* CONTENT AREA */}
				<div className="flex-1 bg-[#09090b] flex flex-col">
					{/* CONTENT HEADER */}
					<div className="h-16 px-8 flex items-center border-b border-white/5">
						<h1 className="text-xl font-bold text-white">My Account</h1>
					</div>
					<FormProvider {...methods}>
						{/* SCROLLABLE CONTENT */}
						<div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
							{activeTab === "account" && (
								<div className="max-w-xl space-y-10">
									{/* PROFILE BANNER SECTION */}
									<div className="space-y-6">
										<h3 className="text-sm font-medium text-zinc-400">Profile Picture</h3>
										<div className="flex items-center gap-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl">
											<UserImageUpload name="imageUrl" />
											<div className="text-sm text-zinc-500">
												We recommend an image of at least 512x512px. <br />
												<span className="text-zinc-400">Supported formats: JPG, PNG, GIF.</span>
											</div>
										</div>
									</div>

									{/* FORM SECTION */}
									<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
										<div className="grid gap-6">
											<Controller
												control={control}
												name="name"
												render={({ field, fieldState }) => (
													<FluxInput field={field} fieldState={fieldState} nameInSchema="name" fieldTitle="Display Name" placeholder="Your name" />
												)}
											/>

											{/* READ ONLY EMAIL */}
											<div className="space-y-1.5 opacity-60 pointer-events-none">
												<label className="text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1">Email</label>
												<div className="w-full h-11 bg-black/20 border border-white/10 rounded-xl flex items-center px-3 text-sm text-zinc-400">{profile.email}</div>
											</div>
										</div>

										<div className="pt-4 flex items-center justify-end gap-4">
											<Button type="button" variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white">
												Cancel
											</Button>
											<Button type="submit" disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[100px]">
												{isLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Save Changes"}
											</Button>
										</div>
									</form>
								</div>
							)}

							{/* PLACEHOLDERS FOR OTHER TABS */}
							{activeTab === "appearance" && <div className="text-zinc-500">Theme settings coming soon.</div>}
						</div>
					</FormProvider>
				</div>
			</DialogContent>
		</Dialog>
	);
};

// Helper Component for Sidebar Items
function SidebarItem({ icon: Icon, label, active, onClick }: { icon: LucideIcon; label: string; active: boolean; onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			className={cn(
				"flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all w-full text-left",
				active ? "bg-white/10 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5",
			)}
		>
			<Icon className="w-4 h-4" />
			{label}
		</button>
	);
}
