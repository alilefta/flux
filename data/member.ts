import prisma from "@/lib/prisma";

export async function getCurrentMemberByServerAndProfileId(serverId: string, profileId: string) {
	return await prisma.member.findFirst({
		where: { serverId: serverId, profileId: profileId },
		include: {
			profile: true,
		},
	});
}

export async function getMemberByProfileId(profileId: string) {
	return await prisma.member.findFirst({
		where: {
			profileId,
		},
	});
}

export async function getMemberById(memberId: string) {
	return await prisma.member.findFirst({
		where: {
			id: memberId,
		},
	});
}
