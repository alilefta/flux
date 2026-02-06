import prisma from "@/lib/prisma";
import { ServerDetails } from "@/schemas/server";

export async function getServerById(serverId: string) {
	const server = await prisma.server.findUnique({
		where: {
			id: serverId,
		},
	});

	return server;
}

export async function getServersByProfileId(profileId: string) {
	return await prisma.server.findMany({
		where: {
			members: { some: { profileId } },
		},
	});
}

export async function getServerWithDetails(serverId: string, profileId: string): Promise<ServerDetails | null> {
	const server = await prisma.server.findUnique({
		where: {
			id: serverId,
			// Security: Only return if the user is a member
			members: { some: { profileId } },
		},
		include: {
			channels: {
				orderBy: { createdAt: "asc" },
			},
			members: {
				include: { profile: true },
				orderBy: { role: "asc" },
			},
		},
	});

	return server;
}

export async function getFirstServerForProfileId(profileId: string) {
	const server = await prisma.server.findFirst({
		where: { members: { some: { profileId } } },
		include: {
			channels: true,
		},
	});
	return server;
}
