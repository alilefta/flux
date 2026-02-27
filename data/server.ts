import prisma from "@/lib/prisma";
import { ServerDetails } from "@/schemas/composed/server.details";

export async function getServerById(serverId: string) {
	const server = await prisma.server.findUnique({
		where: {
			id: serverId,
		},
	});

	return server;
}

export async function getServerWithAnyChannel(serverId: string) {
	const server = await prisma.server.findFirst({
		where: {
			id: serverId,
		},
		orderBy: {
			createdAt: "asc",
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

export async function getServerByIdWithDefaultChannel(serverId: string, profileId: string) {
	const server = await prisma.server.findUnique({
		where: {
			id: serverId,
			// Security: Ensure user is actually a member of this new server
			members: {
				some: {
					profileId: profileId,
				},
			},
		},
		include: {
			channels: {
				where: {
					name: "general",
				},
				orderBy: {
					createdAt: "asc",
				},
			},
		},
	});

	return server;
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

export async function getServerByIniteCode(inviteCode: string) {
	const server = await prisma.server.findUnique({
		where: { inviteCode },
		include: {
			_count: {
				select: { members: true },
			},
		},
	});
	return server;
}
