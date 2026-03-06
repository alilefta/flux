import { redirect } from "next/navigation";
import { getCurrentProfile } from "@/data/profile";
import prisma from "@/lib/prisma";

export default async function ServersRootPage() {
	const profile = await getCurrentProfile();

	if (!profile) {
		return redirect("/sign-in");
	}

	// 1. Find the first server the user belongs to
	const server = await prisma.server.findFirst({
		where: {
			members: {
				some: {
					profileId: profile.id,
				},
			},
		},
	});

	// const server2 = await getChann

	// 2. If they have a server, send them to it
	if (server) {
		return redirect(`/servers/${server.id}`);
	}

	// 3. If they have NO servers, send them to setup to create/join one
	return redirect("/setup");
}
