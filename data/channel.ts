import prisma from "@/lib/prisma";

export async function getChannelById(channelId: string) {
	return await prisma.channel.findUnique({
		where: {
			id: channelId,
		},
	});
}

export async function getFirstChannelByServerId(serverId: string) {
	return await prisma.channel.findFirst({
		where: { serverId: serverId },
	});
}
