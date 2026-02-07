import { redirect } from "next/navigation";
import { getFirstServerForProfileId } from "@/data/server";
import { getFirstChannelByServerId } from "@/data/channel";
import { currentProfile } from "@/data/current-profile";

interface ServerPageProps {
	params: Promise<{ serverId: string }>;
}

export default async function ServerPage({ params }: ServerPageProps) {
	const { serverId } = await params;
	const profile = await currentProfile();

	if (!profile) return redirect("/setup");

	const server = await getFirstServerForProfileId(profile.id);

	// 1. If we found "general", go there
	const initialChannel = server?.channels[0];

	if (initialChannel?.name === "general") {
		return redirect(`/servers/${serverId}/channels/${initialChannel.id}`);
	}

	// 2. If no "general" (edge case), find ANY channel
	if (!initialChannel) {
		const anyChannel = await getFirstChannelByServerId(serverId);
		if (anyChannel) {
			return redirect(`/servers/${serverId}/channels/${anyChannel.id}`);
		}
	}

	// 3. If server has NO channels, we stay on this page.
	// We should render an "Empty State" here so the user isn't staring at a blank screen.
	return (
		<div className="bg-[#141417]/60 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl flex flex-col items-center justify-center h-full text-center p-8">
			<p className="text-zinc-400">No channels found.</p>
			<p className="text-xs text-zinc-500 mt-2">Create a channel to get started.</p>
		</div>
	);
}
