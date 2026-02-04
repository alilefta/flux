"use server";
import { v4 as uuidv4 } from "uuid";
import { actionClientWithProfile } from "@/lib/safe-action";
import { CreateServerActionSchema } from "@/schemas/server";
import { MemberRole } from "@/generated/prisma/enums";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const createServerAction = actionClientWithProfile.inputSchema(CreateServerActionSchema).action(async ({ parsedInput: { name, imageUrl }, ctx: { profile } }) => {
	try {
		const server = await prisma.server.create({
			data: {
				profileId: profile.id,
				name,
				imageUrl,
				inviteCode: uuidv4(),
				channels: {
					create: [{ name: "general", profileId: profile.id }],
				},
				members: {
					create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
				},
			},
		});

		// We don't necessarily need to revalidate here if we are redirecting on the client,
		// but it's good practice if this action is used elsewhere.
		revalidatePath("/");

		return { success: true, server };
	} catch (error: unknown) {
		console.error(error);
		return { success: false, error: "Failed to create server" };
	}
});
