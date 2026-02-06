import { redirect } from "next/navigation";
import { currentProfile } from "@/data/current-profile"; // Check your import path
import { SetupUI } from "@/components/setup/setup-ui";
import prisma from "@/lib/prisma";
import { SetupNavbar } from "@/components/setup/setup-navbar";

export default async function SetupPage() {
	const profile = await currentProfile();

	// Redirect if server exists
	const server = await prisma.server.findFirst({
		where: { members: { some: { profileId: profile.id } } },
	});

	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
			{/* 1. THE NAVBAR */}
			<SetupNavbar />

			{/* Aurora Background */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[150px] rounded-full animate-aurora pointer-events-none" />

			{/* Content */}
			<div className="relative z-10 w-full flex justify-center px-4">
				<SetupUI />
			</div>
		</div>
	);
}
