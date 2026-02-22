import prisma from "@/lib/prisma";

export const getOrCreateConversation = async (memberOneId: string, memberTwoId: string) => {
	// 1. Try finding existing conversation (Order A -> B)
	const conversation = (await findConversation(memberOneId, memberTwoId)) || (await findConversation(memberTwoId, memberOneId));

	if (conversation) {
		return conversation;
	}

	// 2. Create new if not found
	return await createNewConversation(memberOneId, memberTwoId);
};

const findConversation = async (memberOneId: string, memberTwoId: string) => {
	try {
		const conversation = await prisma.conversation.findFirst({
			where: {
				AND: [{ memberOneId: memberOneId }, { memberTwoId: memberTwoId }],
			},
			include: {
				memberOne: true,
				memberTwo: true,
			},
		});

		return conversation;
	} catch {
		return null;
	}
};

const createNewConversation = async (memberOneId: string, memberTwoId: string) => {
	try {
		return await prisma.conversation.create({
			data: {
				memberOneId,
				memberTwoId,
			},
			include: {
				memberOne: true,
				memberTwo: true,
			},
		});
	} catch {
		return null;
	}
};
