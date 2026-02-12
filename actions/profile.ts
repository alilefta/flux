"use server";

import { actionClientWithProfile } from "@/lib/safe-action";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { UpdateProfileSchema } from "@/schemas/profile";
import { ERRORS } from "@/lib/errors";

export const updateProfileAction = actionClientWithProfile
	.metadata({ actionName: "update-profile" })
	.inputSchema(UpdateProfileSchema)
	.action(async ({ parsedInput, ctx: { profile } }) => {
		const { name, imageUrl } = parsedInput;

		try {
			const updatedProfile = await prisma.profile.update({
				where: {
					id: profile.id, // Only update self
				},
				data: {
					name,
					imageUrl,
				},
			});

			revalidatePath("/");
			return { success: true, profile: updatedProfile };
		} catch (error) {
			console.error("[UPDATE_PROFILE] action error", error);
			throw ERRORS.INTERNAL_SERVER_ERROR;
		}
	});
