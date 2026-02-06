"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const SetupNavbar = () => {
	const { user, isLoaded } = useUser();

	if (!isLoaded) {
		return (
			<div className="fixed top-6 right-6 z-50">
				<Loader2 className="h-6 w-6 animate-spin text-zinc-500" />
			</div>
		);
	}

	return (
		<nav className="fixed top-6 right-6 z-50 flex items-center gap-4 animate-in fade-in slide-in-from-top-5 duration-700">
			{/* User Details Pill */}
			<div className="hidden md:flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/5 rounded-full shadow-xl">
				<div className="flex flex-col items-end">
					<span className="text-sm font-medium text-white">{user?.fullName || user?.username}</span>
					<span className="text-[10px] font-mono text-zinc-400">{user?.primaryEmailAddress?.emailAddress}</span>
				</div>

				<div className="h-8 w-px bg-white/10 mx-1" />

				{/* Clerk Button with custom styling */}
				<UserButton
					appearance={{
						elements: {
							avatarBox: "h-8 w-8 border border-white/10 ring-2 ring-white/5 hover:ring-white/20 transition-all",
							userButtonPopoverCard: "bg-[#141417] border border-white/10 shadow-2xl",
							userButtonPopoverFooter: "hidden",
						},
					}}
					afterSignOutUrl="/"
				/>
			</div>

			{/* Mobile: Just the button */}
			<div className="md:hidden">
				<UserButton afterSignOutUrl="/" />
			</div>
		</nav>
	);
};
