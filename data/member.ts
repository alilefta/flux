import prisma from "@/lib/prisma";

export async function getCurrentMemberByServerAndProfileId(serverId: string, profileId: string) {
	return await prisma.member.findFirst({
		where: { serverId: serverId, profileId: profileId },
	});
}
