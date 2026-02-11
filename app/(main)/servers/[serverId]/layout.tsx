import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";
import { getServerById, getServersByProfileId, getServerWithDetails } from "@/data/server";
import { notFound, redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import { QueryProvider } from "@/providers/query-provider";
interface ServerLayoutProps {
	children: React.ReactNode;
	params: Promise<{ serverId: string }>;
}

export default async function ServerLayout({ children, params }: ServerLayoutProps) {
	const { serverId } = await params;
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	// 1. Fetch the specific server securely using Data Layer
	const server = await getServerWithDetails(serverId, profile.id);

	// 2. Handle "Not Found" Logic
	if (!server) {
		// Check if they have ANY servers to decide redirect vs 404
		const userServersCheck = await getServersByProfileId(profile.id);

		if (userServersCheck.length === 0) {
			return redirect("/setup");
		}

		return notFound();
	}

	// 3. Fetch all servers for the Navigation Rail using Data Layer
	const userServers = await getServersByProfileId(profile.id);

	return (
		<div className="h-screen w-full flex gap-3 py-4 px-2 bg-background overflow-hidden relative">
			{/* Zone A: Navigation Rail */}
			<div className="shrink-0 z-20">
				<NavigationSidebar servers={userServers} activeServerId={server.id} />
			</div>

			{/* Zone B: Server Sidebar */}
			<div className="shrink-0 z-10 h-full">
				<ServerSidebar
					server={server}
					role="ADMIN" // need to be changed to current member.role
					// We pass undefined for activeChannelId here because the Layout
					// doesn't know the channel. The Page will handle channel selection visually.
				/>
			</div>

			{/* Zone C: Page Content */}
			<QueryProvider>
				<main className="flex-1 h-full min-w-0 overflow-hidden">{children}</main>
			</QueryProvider>
		</div>
	);
}
