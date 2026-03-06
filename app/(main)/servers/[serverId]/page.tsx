import { redirect } from "next/navigation";
import { getServerByIdWithDefaultChannel, getServerWithAnyChannel } from "@/data/server";
import { getCurrentProfile } from "@/data/profile";
import { MobileToggle } from "@/components/mobile/mobile-toggle";

interface ServerPageProps {
	params: Promise<{ serverId: string }>;
}

export default async function ServerPage({ params }: ServerPageProps) {
	const { serverId } = await params;
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	const server = await getServerByIdWithDefaultChannel(serverId, profile.id);

	// 1. If we found "general", go there
	const generalChannel = server?.channels[0];

	if (generalChannel) {
		return redirect(`/servers/${serverId}/channels/${generalChannel.id}`);
	}

	// 2. If no "general" (edge case), find ANY channel
	if (server) {
		// Ensure server exists
		const anyChannel = await getServerWithAnyChannel(server.id);

		if (anyChannel) {
			return redirect(`/servers/${serverId}/channels/${anyChannel.id}`);
		}
	}

	// 3. If server has NO channels, we stay on this page.
	// We should render an "Empty State" here so the user isn't staring at a blank screen.
	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col h-full relative z-0">
			{/* ✅ ADD HEADER FOR MOBILE TOGGLE */}
			<div className="md:hidden h-12 flex items-center px-4 border-b border-white/5">
				<MobileToggle serverId={serverId} />
			</div>

			{/* Empty State Content */}
			<div className="flex-1 flex flex-col items-center justify-center text-center p-8">
				<p className="text-zinc-400">No channels found.</p>
				<p className="text-xs text-zinc-500 mt-2">Create a channel to get started.</p>
			</div>
		</div>
	);
}
