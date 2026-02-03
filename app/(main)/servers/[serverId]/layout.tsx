import { dummyServers } from "@/lib/dummy-data";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

interface ServerLayoutProps {
	children: React.ReactNode;
	params: { serverId: string };
}

export default function ServerLayout({ children, params }: ServerLayoutProps) {
	const serverId = params.serverId;
	const server = dummyServers.find((s) => s.id === serverId) || dummyServers[0];

	return (
		<div className="h-screen w-full flex gap-3 p-4 bg-background overflow-hidden relative">
			{/* 1. Navigation Rail (Zone A) */}
			<div className="shrink-0 z-20">
				<NavigationSidebar servers={dummyServers} activeServerId={server.id} />
			</div>

			{/* 2. Server/Channel Sidebar (Zone B) */}
			<div className="shrink-0 z-10 h-full">
				<ServerSidebar server={server} activeChannelId="ch-1" />
			</div>

			{/* 3. The Page Content (Zone C) */}
			{/* The page.tsx will render inside here */}
			<main className="flex-1 h-full min-w-0">{children}</main>
		</div>
	);
}
